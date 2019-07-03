var express = require('express');
var router = express.Router();

router.get('/',function (req,res) {

    var id = req.query.id;
    var goods = global.dbHelper.getModel('goods');
    goods.find({id:id},function(err, docs){
        if (err){
            res.json({"status": 0,"message": docs});
        } else {
            //console.log(id)
            //console.log(docs)
            var data = []
            data[0] = {
                price:docs[0].price,
                sell:docs[0].sell,
                title:docs[0].title,
                goodsid:docs[0].goodsid,
                number:docs[0].number,
                add_time:docs[0].add_time,
                img_url:docs[0].img_url
            }
            res.json({"status": 1,"message": data}); //以json格式输出
        }
    })


});

module.exports = router;