const express = require("express");
const router = express.Router();
const { signUp, signIn, registerApi } = require("../controller/auth");
const {  
  isRequestValidated,
  validateSignUpRequest,
  validateSignIpRequest,
} = require("../validators/auth");


router.route("/login").post(validateSignIpRequest, isRequestValidated, signIn);


router.route("/signup").post(validateSignUpRequest, isRequestValidated, signUp);
router.route("/register").post(validateSignUpRequest,isRequestValidated,registerApi);



module.exports = router;