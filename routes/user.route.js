const { getAllUsers, setUsers } = require('../controllers/user.controller');
const router = require('express').Router();
const User = require("../models/users.model");

const {emailWithNodeMailer}=require("./../helper/sendMail");

router.get("/users", getAllUsers);
router.post("/users",setUsers);

router.get("/use",async(req,res)=>{
    try{
        await emailWithNodeMailer();
        res.status(200).send("message is sent successfully")
    }catch(error){
        res.status(404).send("something is error")
    }
})

module.exports = router;