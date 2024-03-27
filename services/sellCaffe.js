const db = require("./connect");

const User = require("../models/userModel");


async function sellCaffe(userId) {
    try {
        User.findOne({ _id: userId }, (err, user) => {
            if (err) {
                console.error("User not found", err);
            } else {
                if (user) {
                    console.log("User is : ", user);
                } else {
                    console.log("User not found.");
                }
            }
        });
    } catch (error) {
        console.error("Has an error", error);
    }
}


module.exports = {
    sellCaffe,
};