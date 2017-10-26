var http = require("http");
var url = require("url");
var fs = require("fs");

var server = http.createServer(function(req,res){
    
    // 解析请求，包括文件名
    var pathname = url.parse(req.url).pathname;
    if(pathname == "/favicon.ico"){
        return false;
    }
    // 输出请求的文件名
    console.log("req for ",pathname," received.");
    fs.readFile(pathname.substr(1),function(err,data){
        if(err){
            console.log(err);
            // HTTP 状态码: 404 : NOT FOUND
            // Content Type: text/plain
            res.writeHead(404,{"Content-type":"text/html"});
        }else{
            // HTTP 状态码: 200 : OK
            // Content Type: text/plain
            res.writeHead(200,{"Content-type":"text/html"});
            // 响应文件内容
            res.write(data.toString()); 
        }
        //  发送响应数据
        res.end();
    })
    
});
// 12 = 197.88
// 10 = 174.9
// 6  = 112.44


server.listen("2000",function(data){    
    console.log(data)
})
