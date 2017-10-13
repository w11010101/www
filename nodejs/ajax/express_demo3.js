var express = require("express");
var app = express();
 
app.use(express.static("public"));

app.get('/',function(req,res){
    res.send("hello word");

})

var server = app.listen("4000",function(){
    var host = server.address().host;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port);
 
});