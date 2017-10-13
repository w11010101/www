var http = require('http');
var url = require('url');
var router = require('./router')
http.createServer(function(request,response){
    // response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    if(request.url!="/favicon.ico"){  //清除2次访问
        var pathname = url.parse(request.url).pathname;
        pathname = pathname.replace(/\//,'');//替换掉前面的/
        console.log(pathname);
        router[pathname](request,response);
    }
}).listen(8000);
console.log("is running")