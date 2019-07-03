var express = require('express');
var router = express.Router();

router.get('/',function (req,res) {

    var param = req.query;
    var id = param.id;
    var db = param.dbs;
    //console.log(db)
    var pageNum = param.pageNum
    var condition = {id :id};
    var db = global.dbHelper.getModel(db+"");
    db.find(condition,function(err, docs){
        if (err){
            res.json({"errorCode": 405,"errorMessage": docs});
        } else {
            //console.log(docs[0].commit.length)
            var length = docs[0].commit.length
            var pN = parseInt(length/10);
            var lastPage = length%10;
            var newArr = docs[0].commit.slice(10*(pageNum-1),(pageNum>pN+1)?(10*(pageNum-1)):((pageNum == pN+1)?lastPage+10*(pageNum-1):10*pageNum))
            //console.log((pageNum>pN+1)?(10*(pageNum-1)):((pageNum == pN+1)?lastPage:10*pageNum))
            //console.log(newArr.length)
            if (newArr.length == 0){
                res.json({"errorCode": 302,"data": newArr}); //以json格式输出
            }else{
                res.json({"errorCode": 200,"data": newArr}); //以json格式输出
            }
        }
    })

});

module.exports = router;