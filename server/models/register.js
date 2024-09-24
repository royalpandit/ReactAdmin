const mongoose = require("mongoose")

const registerModel = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
        trim: true,
        min: 3,
        max: 40
    },
    lastName: {
        type: String,
        require: true,
        trim: true,
        min: 3,
        max: 40
    }, email: {
        type: String,
        require: true,
        trim: true,
        min: 3,
        max: 40
    }, password: {
        type: String,
        require: true,
        trim: true,
        min: 2,
        max: 10
    }
})

module.exports = mongoose.model("register", registerModel);
