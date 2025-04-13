// models/Contest.js

const mongoose = require('mongoose');

const contestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  entryFee: {
    type: Number,
    required: true,
  },
  prize: {
    type: Number,
    required: true,
  },
  matchId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Match',
    required: true,
  },
  totalSpots: {
    type: Number,
    required: true,
  },
  spotsFilled: {
    type: Number,
    default: 0,
  },
  users: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
}, { timestamps: true });

module.exports = mongoose.model('Contest', contestSchema);// Contest.js - Dummy content
