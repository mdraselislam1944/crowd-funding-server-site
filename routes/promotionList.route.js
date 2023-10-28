const { getAllPromotionList } = require('../controllers/promotionList.controller');
const router = require('express').Router();


router.get('/promotionList',getAllPromotionList);


module.exports = router;