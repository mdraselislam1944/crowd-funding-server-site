const { getAllUsers, setUsers } = require('../controllers/user.controller');
const router = require('express').Router();

router.get("/", getAllUsers);
router.post("/",setUsers);


module.exports = router;