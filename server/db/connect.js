const mongoose = require("mongoose");
const connectDB = (url)=>{
    return  mongoose.connect(process.env.URL) 
}

module.exports = connectDB