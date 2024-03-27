const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const db = mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB: ", error);
    }
);

module.exports = db;