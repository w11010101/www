// node.js 的web框架 express
var express = require("express");
var fs = require("fs");
var app = express();


// app.get("",function(req,res){
//     res.send("hello world");
// });


app.get('/test', function (req, res) {
    fs.readFile('./file1.txt', function (err, data) {
        if (err) {
            res.status(500).send('read file1 error');
        }
        fs.readFile('./file2.txt', function (err, data) {
            if (err) {
                res.status(500).send('read file2 error');
            }
            res.type('text/plain');
            res.send(data);
        });
    });
});

var server = app.listen("3000",function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})
// -----------------------------------------------------------
// koa1.0 
// 随着新版Node.js开始支持ES6，
// Express的团队又基于ES6的generator重新编写了下一代web框架koa。
// 和Express相比，
// zkoa 1.0使用generator实现异步，代码看起来像同步的：
// var koa = require('koa');
// var app = koa();
// app.use("/test",function*(){

// })















































































































