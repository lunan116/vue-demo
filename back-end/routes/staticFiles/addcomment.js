var express = require('express');
var router = express.Router();

router.post('/',function (req,res) {
   var param = req.body;
   var content = param.comment_content;
   var name= (param.name.length == 0?"匿名用户":param.name);
   var comment_time = param.comment_time;
   var id = param.id;
   var dbs = param.dbs;
   var cmt = {
       name:name,
       comment_time:comment_time,
       comment_content:content
   }
    var db = global.dbHelper.getModel(dbs+'');
    db.find({id:id},function(err, docs){
        if (err){
            res.json({"status": 0,"message": docs});
        } else {
            //console.log(docs)
            docs[0].commit.push(cmt)
           //console.log(docs[0].commit)
            db.update({id:id},{commit:docs[0].commit},(err,doc)=>{
                res.json({"status": 1,"message": "修改成功！"}); //以json格式输出
            })

        }
    })


});

module.exports = router;