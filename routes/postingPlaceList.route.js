const { getPostingPlaceList } = require('../controllers/postingPlaceList.controller');
const router = require('express').Router();


router.get('/postingPlaceList',getPostingPlaceList);


module.exports = router;