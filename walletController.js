const User = require('../models/User');
const Transaction = require('../models/Transaction'); // You’ll need this model

// Get wallet balance
exports.getWallet = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json({ balance: user.wallet });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch wallet', error });
  }
};

// Add money to wallet (for testing/demo only)
exports.addMoney = async (req, res) => {
  const { amount } = req.body;
  try {
    const user = await User.findById(req.user.id);
    user.wallet += amount;
    await user.save();

    await Transaction.create({
      userId: req.user.id,
      amount,
      type: 'credit',
      description: 'Money added to wallet'
    });

    res.status(200).json({ message: 'Money added', balance: user.wallet });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add money', error });
  }
};

// Withdraw money
exports.withdrawMoney = async (req, res) => {
  const { amount } = req.body;
  try {
    const user = await User.findById(req.user.id);
    if (user.wallet < amount) {
      return res.status(400).json({ message: 'Insufficient balance' });
    }

    user.wallet -= amount;
    await user.save();

    await Transaction.create({
      userId: req.user.id,
      amount,
      type: 'debit',
      description: 'Money withdrawn from wallet'
    });

    res.status(200).json({ message: 'Withdrawal successful', balance: user.wallet });
  } catch (error) {
    res.status(500).json({ message: 'Withdrawal failed', error });
  }
};
