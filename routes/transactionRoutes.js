const express = require('express');
const router = express.Router();
const { fetchData, getTransactions } = require('../controllers/transactionController');
router.get('/fetch-data', fetchData);
router.get('/transactions', getTransactions);
module.exports = router;
