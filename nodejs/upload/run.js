var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer = require('multer');
var router = express.Router();
app.use(express.static("bin"));
app.use(express.static("test"));
app.use(express.static("doc"));
app.use(express.static("lib"));

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(multer({dest: 'doc/uploaded/'}).array('image'));

var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'doc/uploaded/');
    },
    filename:function(req,file,cb){
        cb(null,file.originalname);
    }
})
var upload = multer({
    storage:storage
})
app.get("/upload", function(req,res) {
    res.sendFile(__dirname+"/test/index.html");
})

app.post("/upload_imgs",upload.array('image'),function (req,res){
    let response = {
        err:0,

    };
    for(var f of req.files){
        var dir_file = __dirname+"\\"+f.originalname;
        fs.readFile(f.path, function(err,data) {
            fs.writeFile(dir_file, data ,function(err){
                if(err){
                    console.log("err")
                    return response.err = 1;
                }else{
                    // response.data 
                }

            });
            fs.stats(dir_file, function(err,stat){
                if(err){
                    console.log(err)
                }else{
                    console.log(stat)
                }
            })
            
        })
    }

    response["data"] = req.files;
    
    res.send(response);
})

var server = app.listen("8081",function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})



