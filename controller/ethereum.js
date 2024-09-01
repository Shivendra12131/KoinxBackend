const express = require('express');
const axios = require('axios');
const { getApi } = require('../util/Api');
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
