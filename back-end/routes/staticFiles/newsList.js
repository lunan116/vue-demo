var express = require('express');
var router = express.Router();

router.get('/',function (req,res) {
    /*res.json({
        status:1,
        message:[{
            id:13,
            title:'习近平访问朝鲜',
            add_time:'2015-04-16T03:50:28.000Z',
            zhaiyao:'习近平同志访问朝鲜，朝鲜最高领导人金正恩接待，朝鲜人民热烈欢迎。',
            click:2,
            img_url:"https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=1803d6a688025aafd33279cdc3d6cc59/4a36acaf2edda3ccb5c928460be93901213f92a3.jpg"
        },
        {
            id:15,
            title:'习近平访问美国',
            add_time:'2016-04-16T03:50:28.000Z',
            zhaiyao:'习近平同志访问美国，美国最高领导人特普朗接待，美国人民热烈欢迎。',
            click:8,
            img_url:"https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=1803d6a688025aafd33279cdc3d6cc59/4a36acaf2edda3ccb5c928460be93901213f92a3.jpg"
        },
        ]
    }); //以json格式输出*/

        var news = global.dbHelper.getModel('news');
        news.find({},function(err, docs){
            if (err){
                res.json({"status": 0,"message": docs});
            } else {
                res.json({"status": 1,"message": docs}); //以json格式输出
            }
        })


});

module.exports = router;