const router = require('express').Router();
const {getMember,setMember,updateProfileMember}=require("./../controllers/member.controller");

router.get("/member",getMember)

router.post("/member/:id",setMember);

router.get("/updateProfile",updateProfileMember);

module.exports = router;