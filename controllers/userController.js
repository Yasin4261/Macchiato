const User = require('../models/userModel');
const userService = require('../services/userService');

exports.getOrdersAmount = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({
                error: 'User not found',
            });
        }
        res.status(200).json({
            message: 'User order value retrieved successfully',
            order: user.order,
        });
    } catch (error) {
        res.status(400).json({
            error:error.message || 'An error occurred while processing products',
        });
    }
};