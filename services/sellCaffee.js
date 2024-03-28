const db = require("./connect");

const User = require("../models/userModel");


async function sellCaffee(userId, caffees) {
    try {

        const user = await User.findById(userId);
        if(!user) {
            throw new Error('User not found.')
        }
        
        user.order += parseInt(caffees);

        await user.save();

        console.log("new caffee yuhhuu :) : ", user);
        return user;

    } catch (error) {
        console.error("Has an error", error.message);
    }
}


module.exports = {
    sellCaffee: sellCaffee,
};