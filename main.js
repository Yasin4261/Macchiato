const express = require("express");
const app = express();

const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const db = require("./services/connect");
const sellCaffeeController = require("./controllers/sellCaffeeController");
const userController = require("./controllers/userController");


// middlewares
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.use(helmet());
app.use(morgan("common"));
app.use(express.json());
app.use(
    cors(
        {origin: "http://localhost:8800,"}
        )
    );

app.use("/api/auth", userController);
app.use("/api/buy", sellCaffeeController);



app.listen(8800, () => {
    console.log("API working!");
});