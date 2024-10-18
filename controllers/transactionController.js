const Transaction = require('../models/Transaction');
const axios = require('axios');

// Fetch and seed transaction data
exports.fetchData = async (req, res) => {
    try {
        const response = await axios.get('https://api.example.com/transactions'); // Replace with your API URL
        const transactions = response.data;

        await Transaction.insertMany(transactions); // Seed the database
        res.status(200).json({ message: 'Data fetched and seeded successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching data' });
    }
};

// Get all transactions with pagination and search
exports.getTransactions = async (req, res) => {
    const { page = 1, limit = 10, search } = req.query;

    const query = search ? { productId: { $regex: search, $options: 'i' } } : {};

    try {
        const transactions = await Transaction.find(query)
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();
        const count = await Transaction.countDocuments(query);

        res.status(200).json({
            transactions,
            totalPages: Math.ceil(count / limit),
            currentPage: page,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching transactions' });
    }
};
