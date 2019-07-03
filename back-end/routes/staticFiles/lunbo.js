var express = require('express');
var router = express.Router();

router.get('/',function (req,res) {
    var obj = {
        a: 1,
        b: 2
    };
    res.json({"errorCode": 200,"data": [{'img':'https://fms.res.meizu.com/dms/2019/06/06/7f25b296-28a7-48c9-ac34-18fe215b5b39.jpg'},
            {'img':'https://fms.res.meizu.com/dms/2019/06/19/0d63508c-c9fe-4b58-88ff-967f490da02b.jpg'},
            {'img':'https://fms.res.meizu.com/dms/2019/06/10/cc5d2e32-14b7-4c70-8639-4bbd84eb76fd.jpg'}]}); //以json格式输出
});

module.exports = router;