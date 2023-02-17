const expressAsyncHandler = require("express-async-handler");
const User = require("../modals/userModal");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { json } = require("express");

const JWTSecret = process.env.JWTSecret;

// callback function for creating user
const createUser = async (req, res) => {
    try {
        let status = false;
        // finding if user already exists with the same email or not
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).send({ error: "Sorry, a user with this email already exists!!", status: false });
        }
        const salt = await bcryptjs.genSalt(20);
        const securedPassword = await bcryptjs.hash(req.body.password, salt);
        user = await User.create(
            {
                name: req.body.name,
                email: req.body.email,
                password: securedPassword,
                college: req.body.college,
                city: req.body.city,
            }
        );
        const authToken = jwt.sign(req.body.email, JWTSecret);
        status = true;
        // return res.json({ status: status, authToken: authToken });
    } catch (err) {
        let status = false;
        console.log(err);
        return res.status(500).json({ status: status, error: "Internal Server Error!!" });
    }
};

// callback function for login
const loginUser = async (req,res)=>{
    let success = false;
    const {email,password} = req.body;
    try{
        let user = await User.findOne({email:email});
        if(!user){
            return res.status(400).json({error:"Please login with correct credentials",success:success});
        }
        const passwordCompare = await bcryptjs.compare(password,user.password);
        if(!passwordCompare){
            return res.status(400).json({error:"Please login with correct credentials",success:success});
        }
        const authToken = jwt.sign(user.email,JWTSecret);
        success = true;
        return res.json({success:success,authToken:authToken});
    }catch(err){
        success = false;
        console.log(err);
        res.status(500).json({success:success,error:"Internal Server Error!!"});
    }
};

module.exports = {createUser,loginUser};

