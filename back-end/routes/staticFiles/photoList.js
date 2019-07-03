var express = require('express');
var router = express.Router();

router.get('/',function (req,res) {

    var photoList = global.dbHelper.getModel('photolists');
    var type = req.query.type;
    var id = req.query.id;
    //console.log(type)
    if (id == undefined || id == "" || id == null) {
        if(type == 0){
            photoList.find({},function(err, docs){
                if (err){
                    res.json({"status": 0,"message": docs});
                    //console.log(err)
                } else {
                    res.json({"status": 1,"message": docs}); //以json格式输出
                    //console.log(docs)
                }
            })
        }else {
            photoList.find({type: type}, function (err, docs) {
                if (err) {
                    res.json({"status": 0, "message": docs});
                    //console.log(err)
                } else {
                    res.json({"status": 1, "message": docs}); //以json格式输出
                    //console.log(docs)
                }
            })
        }
    }else{
        //console.log(id)
        photoList.find({id:id},function(err, docs){
            if (err){
                res.json({"status": 0,"message": docs});
                //console.log(err)
            } else {
                res.json({"status": 1,"message": docs}); //以json格式输出
                //console.log(docs)
            }
        })
    }

});

module.exports = router;