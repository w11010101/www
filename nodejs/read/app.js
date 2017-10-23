var http = require("http");
var url = require("url");
var router = require("./router");
// var express = require("express");
var pathArr;
var server = http.createServer(function(req,res){
    if(req.url!="/favicon.ico"){
        // res.writeHead(200,{'Content-Type':'text/html', 'Access-Control-Allow-Origin': '*','charset':'utf-8'});

        var pathname = url.parse(req.url).pathname;

        pathname = pathname.replace(/\//,"");
        
        var re = /\.jpg|\.png|\.jpeg|\.gif/g;

        if(pathname.match(re)) {
            pathArr = pathname.split("/");
            router[pathArr[0]](req,res,pathArr[1]);
        }else{
            pathArr = pathname.split("/");
            console.log("pathArr =", pathArr)
            let key = pathArr[0]===""?"html":pathArr[0];
            router[key](req,res,pathArr[1]);
        }
    }
});
server.listen(1000, function (){
    console.log("监听losthost:1000 成功.....");
});

// ************************************************************
// // express
// // var app = express();
// app.get("/",(req,res) =>{

//     // console.log(data)

// });

// app.listen("1000");
// console.log("listen 1000 ...");
