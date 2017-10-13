var http = require("http");
var User = require("./user");

// var onRequest = function (request,response){
//     response.writeHead(200,{'Content-Type':'text/html', 'Access-Control-Allow-Origin': '*'});
//     response.write('<head><meta charset="utf-8"/></head>');
//     if(request.url!=="/favicon.ico"){ // 消除2次访问
//         user = new User(123,"张三",28);
//         user.enter();
//         response.write(user.name + "进入页面！");
//         response.end();
//     }
// }
// var server = http.createServer(onRequest);
var server = http.createServer(function (request,response){
    // response.writeHead(200,{'Content-Type':'application/json', 'Access-Control-Allow-Origin': '*'});
    response.writeHead(200,{'Content-Type':'text/html', 'Access-Control-Allow-Origin': '*'});
    response.write('<head><meta charset="utf-8"/></head>');
    if(request.url!=="/favicon.ico"){ // 消除2次访问
        user = new User(123,"张三",28);
        user.enter();
        response.write(user.name + "进入页面！");
        response.end();
    }
})
server.listen(3000,"localhost",function(){
    console.log("开始监听 test.js ...");
});
