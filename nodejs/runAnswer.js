var http = require('http');
var fs = require("fs"); // 文件系统
// var url = require("url");
var querystring = require('querystring');
// var events = require("events");
// var user = require("./user");


var server = http.createServer(function (request, response) {
    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200,{'Content-Type':'application/json', 'Access-Control-Allow-Origin': '*','charset':'utf-8'}); 
    // response.writeHead(200,{'Content-Type':'application/x-javascript', 'Access-Control-Allow-Origin': '*','charset':'utf-8'}); 
    if(request.url!=="/favicon.ico"){
        // 定义了一个post变量，用于暂存请求体的信息
        var post = "";
        // 通过request的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
        request.on('data',function(chunk){
            post += chunk;
        });
        // 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
        request.on('end',function(){
            
            post = querystring.parse(post);
            switch (post.type){
                case "state":
                    loadFile("json/data/state.json");
                break;
                case "type":
                    loadFile("json/data/type.json");
                break;
                case "class1":
                    loadFile("json/data/class1.json");
                break;
                case "class":
                    loadFile("json/data/class.json");
                break;
                case "list":
                    loadFile("json/data/list.json");
                break;
                case "list1":
                    loadFile("json/data/list1.json");
                break;
            }
        });
        // 读取文件
        function loadFile(file){
            fs.readFile(file,function(err,data){
                if(err){
                    response.write("读取文件时发生错误");
                }else{
                    response.write(data);
                    
                }
                response.end();
            })
        }
       
    }
});

// 随机数，本地测试用
function getRandomm(i, max) {
    var arr = [];
    while (i > 0) {
        var num = Math.floor(Math.random() * max + 1);
        arr.push(num);
        i--;
    }
    return arr;
}
server.listen(3000,"localhost",function(data){
    console.log("开始监听... http://localhost:3000/");
    // console.dir(url.parse);
});


