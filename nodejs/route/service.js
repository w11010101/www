var http = require("http");
var url = require("url");
module.exports = {
    start:function(route){
        function onRequest(request,response){
            var pathName = url.parse(request.url).pathname;

            console.log("pathName = " + pathName);
            route(pathName);
            response.writeHead(200,{'Content-Type':'text/html', 'Access-Control-Allow-Origin': '*'});
            response.write("pathName = " + pathName);
            response.end();
        }

        http.createServer(onRequest).listen(4000,"localhost",function (){
            console.log("listen localhost service.js ...");
        });
    }
}