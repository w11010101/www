var http = require("http");
var fs = require("fs");
var express = require("express");
var app = new express();

app.use(express.static("bin"));
app.use(express.static("test"));
app.use(express.static("doc"));
app.use(express.static("lib"));


app.get("/upload", function(req,res) {
    console.log(__dirname + "/test/index.html");
    res.sendFile(__dirname+"/test/index.html");
    
    // console.log(req)
    // res.send(req.toString());
    // res.send("1111hello word!");
    // fs.readFile("./index.html",function(err,data){
    //     if(err){
    //         return console.error(err);
    //     }else{
    //         console.log(data.path);
    //     }
    // })
})

var server = app.listen("8081",function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})



