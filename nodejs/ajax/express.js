var express = require('express');
var app = express();

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    res.json("all *");
    next();
});

var questions = [{
        data: 213,
        num: 444,
        age: 12
    },
    {
        data: 456,
        num: 678,
        age: 13
    }
];

//写个接口firstExpress
app.get('/firstExpress', function(req, res) {
    res.status(200),
    res.json(questions);
});


app.route("/secondExpress")
.get(function(req,res){
    res.json("first GET");
})
.post(function(req,res){
    res.json("second POST");
})

// 多个callback
app.get('/thridExpress', function (req, res, next) {
  res.send('response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from B!');
});

//配置服务端口
var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
})