import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
  description: String,
  amount: Number,
  time: Date,
});

export default mongoose.models.Transaction || mongoose.model('Transaction', TransactionSchema);
