// models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  walletBalance: {
    type: Number,
    default: 0
  },
  totalWinnings: {
    type: Number,
    default: 0
  },
  joinedContests: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Contest'
  }]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);// User.js - Dummy content
