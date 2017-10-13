var express = require("express");
var app = express();

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

//  主页输出 "Hello World"
app.get("/",function (req,res){
    console.log("主体 GET 请求");
    res.send("Hello word");
});

//  POST 请求
app.post("/",function(req,res){
    console.log("主体 POST 请求");
    res.json({a:1,b:2});
    res.end();
    // res.send("Hello word");
    
})

//  del_user 页面响应
app.get("/del_user",function(req,res){
    console.log("del_user ");
    res.send("删除页面")
})


// 静态文件

app.use(express.static('../plugin'));

app.get("/index.htm",function (req,res){
    res.sendFile(__dirname + '/index.htm');
})
// form 表单提交
app.get("/process_get",function (req,res){
    // 输出json格式
    
    var response = {
        first_name:req.query.first_name,
        last_name:req.query.last_name
    }
    res.end(JSON.stringify(response));
    // res.json(response);
    // res.end();
})


var server = app.listen(2000, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s",host,port);
});



