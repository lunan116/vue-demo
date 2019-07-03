var express = require('express');
var router = express.Router();

router.get('/',function (req,res) {

    var param = req.query;
    var id = param.id;
    //var db = param.dbs;
    //console.log(db)
    var pageNum = param.pageNum
    //var condition = {id :id};
    var goods = global.dbHelper.getModel('goods');
    if(id == null || id == undefined || id == "") {
        goods.find({}, function (err, docs) {
            if (err) {
                res.json({"errorCode": 405, "errorMessage": docs});
            } else {
                //console.log(docs[0].commit.length)
                var length = docs.length
                var pN = parseInt(length / 10);
                var lastPage = length % 10;
                var newArr = docs.slice(10 * (pageNum - 1), (pageNum > pN + 1) ? (10 * (pageNum - 1)) : ((pageNum == pN + 1) ? lastPage + 10 * (pageNum - 1) : 10 * pageNum))
                //console.log((pageNum>pN+1)?(10*(pageNum-1)):((pageNum == pN+1)?lastPage:10*pageNum))
                //console.log(newArr.length)
                if (newArr.length == 0) {
                    res.json({"errorCode": 302, "message": newArr}); //以json格式输出
                } else {
                    res.json({"errorCode": 200, "message": newArr}); //以json格式输出
                }
            }
        })
    }else{
        //console.log(id)
        goods.find({id:id}, function (err, docs) {
            //console.log(docs)
            if (err) {
                res.json({"errorCode": 405, "errorMessage": docs});
            } else {


                if (docs[0].lunbotu) {
                    res.json({"errorCode": 302, "message": docs[0].lunbotu}); //以json格式输出
                } else {
                    res.json({"errorCode": 200, "message": docs[0].lunbotu}); //以json格式输出
                }
            }
        })
    }
});

module.exports = router;