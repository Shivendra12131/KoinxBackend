const express = require('express');
const axios = require('axios');
const { getApi } = require('../util/Api');
const EthereumPrice=require('../models/EthereumPrice')
const Transaction = require('../models/Transaction');
const ServerError = require('../error/ServerError');

exports.normalTransactionAddress = async (req, res, next) => {
    try {
        let { address } = req.query;

        if(!address) {
            throw new ServerError("Missing address in request", 400);
        }
        address=address.toLowerCase();
        const params = {
            module: 'account',
            action: 'txlist',
            address: address,
            startblock: 0,
            endblock: 99999999,
            page: 1,
            offset: 10,
            sort: 'asc',
            apikey: process.env.ETHER_API_KEY,
        };
        const response = await axios.get(process.env.ETHER_API_URL, { params });
        const transactions = response?.data?.result;
        const batchSize = 10;
        for (let i = 0; i < transactions.length; i += batchSize) {
            const batch = transactions.slice(i, i + batchSize);
            try {
                await Transaction.insertMany(batch);
            } catch (error) {
                throw new ServerError("Error fetching transaction", 500);
            }
        }
        return res.status(200).json({
            success: true,
            message: "Data fetched and saved successfully",
            data: transactions
        });
    } catch (error) {

        next(error);
    }
};

exports.fetchEthereumPrice = async () => {
    try {
        const response = await axios.get(process.env.COIN_GECKO_URL, {
            params: {
                ids: 'ethereum',
                vs_currencies: 'inr',
            },
        });
        const ethPrice = response.data.ethereum.inr;
        console.log(ethPrice);
        await EthereumPrice.create({ price: ethPrice });
    } catch (error) {
        console.log("Error fetching Ethereum price",error.message);
    }
};

exports.totalExpenses = async (req, res, next) => {
    try {
        let { address } = req.query;
        if(!address) {
            throw new ServerError("Missing address in request", 400);
        }
        address = address.toLowerCase();
        const transactions = await Transaction.find({to:address});
        const totalExpenses = transactions.reduce((total, transaction) => {
            const gasUsed = parseFloat(transaction?.gasUsed);
            const gasPrice = parseFloat(transaction?.gasPrice);
            if (!gasUsed || !gasPrice) {
                return total; 
            }
            const expense = (gasUsed * gasPrice) % 1e18;
            return total + expense;
        }, 0);
        const latestPriceEntry = await EthereumPrice.findOne().sort({ timestamp: -1 });
        if (!latestPriceEntry) {
            throw new ServerError('No price data available', 400);
        }
        const finalPrice = latestPriceEntry?.price;
        return res.status(200).json({
            totalExpenses,
            currentprice: finalPrice,
        });
    } catch (error) {
        next(error);
    }
};


