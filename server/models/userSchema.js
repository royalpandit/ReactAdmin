const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        trim: true,
        min: 3,
        max: 20,
     },
     password: {
        type: String,
        require: true,
        trim: true,
        min: 6,
        max: 20,
     },
   
   });
  


  userSchema.method({
    async authenticate(password) {
       return bcrypt.compare(password, this.hash_password);
    },
  });
    module.exports = mongoose.model("User", userSchema);
