var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer = require('multer');
var router = express.Router();


app.use(express.static(__dirname));
app.use(express.static("views/"));

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req,res) {
  
  var options = {
    root:__dirname,
  }

  res.sendFile("/index.html",options,function(err){
    if(err){
      console.log(err);
      res.status(err.status).end();
    }else{
      console.log('Sent:', __filename);
    }
  });
});


var server = app.listen("8081",function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})

// *************************************************************************************************

// 周一上午：例会  下午：修改意见反馈ajax 获取id（进行中）；
// 周二：修改意见反馈ajax 获取id（用时 0.5天 已完成）；提交意见反馈历史模块（用时 1.5天，已完成）；
// 周三：问答管理页面逻辑修改，重写ajax；外加修改意见反馈部分样式；（用时 1 天 已完成）；
// 周四：特别图书管家 （已用时 1.5 天 完成 80%）；
// 周五：

// 1、修改意见反馈ajax，并添加意见反馈历史模块；（用时 1.5 天 已完成）；
// 2、修改问答管理模块页面逻辑重写ajax；外加修改意见反馈部分样式；（用时 1.5 天 已完成）；
// 3、帮助研发调试问答管理的数据交互 （用时 0.5 天 已完成）；
// 4、特别图书管家 （用时 1.5 天 已完成 80% 进行中）；