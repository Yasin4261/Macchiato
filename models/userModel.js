const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    order: {
        type: Number,
        default: 0,
        min: 0,
        max: 6,
    },
    freeCaffee: {
        type: Number,
        default: 0,
        min: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
