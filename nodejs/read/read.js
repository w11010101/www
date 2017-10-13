var http = require("http");
var url = require("url");
var router = require("./router");
var pathArr;
var server = http.createServer(function(req,res){
    if(req.url!="/favicon.ico"){
        
        var pathname = url.parse(req.url).pathname;
        pathname = pathname.replace(/\//,"");

        var re = /\.jpg|\.png|\.jpeg|\.gif/g;

        router.html(req,res);

        // if(pathname.match(re)) {

        //     pathArr = pathname.split("/");
        //     router[pathArr[0]](req,res,pathArr[1]);
        // }else{
        //     console.log(pathname)
        //     pathArr = pathname.split("/");
        //     console.log(pathArr)
        //     // router[pathArr[0]](req,res,pathArr[1]);
        // }
        
        // router.readHtml(req,res);

        // router.readImg(req,res,pathname);
    }
});
server.listen(1000, function (){
    console.log("监听losthost:1000 成功.....");
});


