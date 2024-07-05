const User = require('../models/userModel');

exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new User({ username, email, password });
        await newUser.save();
        res.status(201).send({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send({ message: 'Error registering user', error });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, password });
        if (!user) {
            return res.status(401).send({ message: 'Invalid credentials' });
        }
        res.send({ message: 'User logged in successfully' });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).send({ message: 'Error logging in', error });
    }
};
