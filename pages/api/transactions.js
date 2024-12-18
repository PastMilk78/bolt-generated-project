import dbConnect from '../../lib/mongodb';
import Transaction from '../../models/Transaction';

export default async function handler(req, res) {
  await dbConnect();

  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const transactions = await Transaction.find({});
        res.status(200).json({ success: true, data: transactions });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const transaction = await Transaction.create(req.body);
        res.status(201).json({ success: true, data: transaction });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
