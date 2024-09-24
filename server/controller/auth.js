const { StatusCodes } = require("http-status-codes");
const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const shortid = require("shortid");
const register=require("../models/register")




const signUp = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            message: "Please Provide Required Information",
        });
    }

    const hash_password = await bcrypt.hash(password, 10);

    const userData = {
        firstName,
        lastName,
        email,
        hash_password,
    };

    const user = await User.findOne({ email });
    if (user) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            message: "User already registered",
        });
    } else {
        User.create(userData).then((data, err) => {
            if (err) res.status(StatusCodes.BAD_REQUEST).json({ err });
            else
                res
                    .status(StatusCodes.CREATED)
                    .json({ message: "User created Successfully" });
        });
    }




};


const registerApi=async(req,res)=>{

const {firstName,lastName,email,password}=req.body
console.log(req.body)

const reg=new register({
    firstName,lastName,email,password
});

 reg.save();
console.log("==>>>",reg)

   res.json(req.body)
}



const signIn = async (req, res) => {
    try {
        if (!req.body.email || !req.body.password) {
            res.status(StatusCodes.BAD_REQUEST).json({
                message: "Please enter email and password",
            });
        }

        const user = await User.findOne({ email: req.body.email });

        if (user) {
            if (user.authenticate(req.body.password)) {
                const token = jwt.sign(
                    { email: user.email },
                    process.env.JWT_SECRET, { expiresIn: "30d" });
                const {email } = user;
                res.status(StatusCodes.OK).json({
                    token,
                    user: {email},
                });
            } else {
                res.status(StatusCodes.UNAUTHORIZED).json({
                    message: "Something went wrong!",
                });
            }
        } else {
            res.status(StatusCodes.BAD_REQUEST).json({
                message: "User does not exist..!",
            });
        }
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ error });
    }
};
module.exports = { signUp, signIn,registerApi };