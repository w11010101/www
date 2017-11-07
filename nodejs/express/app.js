// var http = require("http");
// var server = http.createServer(function (req,res){
//     res.write("hello app.js");
//     res.end()
// })
// server.listen("8081",function(){
//     console.log("listeng localhost:8081 ...")
// })
// *************************************************************
var express = require("express");
var app = new express();
// console.log(app);
app.use(express.static("public"));
app.use(express.static("public"));
app.get("/",function(req,res){
    res.send("hello app.js");
});
var server = app.listen("8081",function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port);
})

