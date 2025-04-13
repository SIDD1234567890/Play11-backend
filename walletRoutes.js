const express = require('express');
const router = express.Router();
const walletController = require('../controllers/walletController');
const authenticate = require('../middleware/authMiddleware');

// Get wallet balance
router.get('/', authenticate, walletController.getWallet);

// Add money (test/demo)
router.post('/add', authenticate, walletController.addMoney);

// Withdraw money
router.post('/withdraw', authenticate, walletController.withdrawMoney);

module.exports = router;
