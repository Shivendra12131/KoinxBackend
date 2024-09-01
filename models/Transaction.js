const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    blockNumber: {
        type: String,
        required: true,
    },
    blockHash: {
        type: String,
        required: true,
    },
    timeStamp: {
        type: String,
        required: true,
    },
    hash: {
        type: String,
        required: true,
    },
    nonce: {
        type: String,
        required: true,
    },
    transactionIndex: {
        type: String,
        required: true,
    },
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        default: "", // Allow empty values
    },
    value: {
        type: String,
        required: true,
    },
    gas: {
        type: String,
        required: true,
    },
    gasPrice: {
        type: String,
        required: true,
    },
    input: {
        type: String,
        required: true,
    },
    methodId: {
        type: String,
        required: true,
    },
    functionName: {
        type: String,
        default: "", // Allow empty values
    },
    contractAddress: {
        type: String,
        default: "",
    },
    cumulativeGasUsed: {
        type: String,
        required: true,
    },
    txreceipt_status: {
        type: String,
        required: true,
    },
    gasUsed: {
        type: String,
        required: true,
    },
    confirmations: {
        type: String,
        required: true,
    },
    isError: {
        type: String,
        required: true,
    }
});

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;