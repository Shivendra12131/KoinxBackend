const express = require('express')
const router = express.Router();
const {normalTransactionAddress} = require('../controller/ethereum')

router.get('/normal-transaction-address', normalTransactionAddress);

module.exports = router;
