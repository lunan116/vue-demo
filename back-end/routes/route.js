var express = require('express');
var router = express.Router();

var lunbo = require('./staticFiles/lunbo')
var newsList = require('./staticFiles/newsList')
var newsInfo = require('./staticFiles/newsInfo')
var comment = require('./staticFiles/comment')
var addcomment = require('./staticFiles/addcomment')
var photoList = require('./staticFiles/photoList')
var goodsList = require('./staticFiles/goodList')
var goodsInfo = require('./staticFiles/goodInfo')

router.use('/getLunbo',lunbo)
router.use('/getNewsList',newsList)
router.use('/getNewsInfo',newsInfo)
router.use('/getComment',comment)
router.use('/addComment',addcomment)
router.use('/getPhotoList',photoList)
router.use('/getGoodsList',goodsList)
router.use('/getGoodsInfo',goodsInfo)

module.exports = router;