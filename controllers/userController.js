const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");
const saltRounds = 10;

const user = require("../services/user");

router.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    
    try {
        const newUser = await user.register(username, email, hashedPassword);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.messae });
    }
});
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const loginUser = await user.login(email, password);
        res.json(loginUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.post("/logout", user.logout);

module.exports = router;