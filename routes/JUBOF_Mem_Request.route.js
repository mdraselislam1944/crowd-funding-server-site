const router = require('express').Router();
const {getRequestMember,setRequestMember,updateRequestMember}=require("./../controllers/JUBOF_Mem_Request.controller");

router.get("/requestStatus",getRequestMember);

router.post("/requestMember",setRequestMember);
router.patch('/requestUpdate',updateRequestMember)

module.exports = router;