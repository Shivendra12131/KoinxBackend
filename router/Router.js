const express = require('express')
const router = express.Router();
const {normalTransactionAddress,totalExpenses} = require('../controller/ethereum')


router.get('/normal-transaction-address', normalTransactionAddress);
router.get('/totalexpensesprice', totalExpenses);

module.exports = router;
