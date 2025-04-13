const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticate = require('../middleware/authMiddleware');

// Get profile
router.get('/profile', authenticate, userController.getUserProfile);

// Update profile
router.put('/profile', authenticate, userController.updateUserProfile);

// Delete account (optional)
router.delete('/profile', authenticate, userController.deleteUser);

module.exports = router;
