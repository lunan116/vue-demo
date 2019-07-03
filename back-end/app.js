const express = require('express')
var bodyParser = require("body-parser")
var router = express.Router();
var path = require('path');
var mongoose = require("mongoose");
const app = express()
app.use(bodyParser.urlencoded({ extended: false })); //解析request中body的urlencoded字符
//app.get('/', (req, res) => res.send('Hello World!'))
// 跨域设置
app.all("*", function(req, res, next) {
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Origin", "*");
    //res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Access-Token");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

/*连接数据库*/
global.dbHelper = require('./connectDB/dbHelper');

global.db = mongoose.connect("mongodb://127.0.0.1:27017/vuedemo",{useNewUrlParser:true});
console.log("连接数据库成功");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));

var routeRouter = require('./routes/route');
app.use('/', routeRouter);

app.listen(3000, () => console.log('Example app listening on port 3000!'))