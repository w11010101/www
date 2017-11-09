var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");
var multer = require("multer");

app.use(express.static("bin"));
app.use(express.static("test"));
app.use(express.static("doc"));
app.use(express.static("lib"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/save/'}).array('image'));

app.get("/upload", function(req,res) {
    res.sendFile(__dirname+"/test/index.html");
})

app.post("/upload_imgs",function (req,res){
    // var f = __dirname + "" + req.body.file[0]
    console.log(req.files);
    // console.log(req.files[0]);
    // console.log(req)
    // for(var f of req.body.file){
        // fs.appendFile("doc/"+f, "data to append", function(err) {
        //     if(err) throw err;
        //     console.log('The "data to append" was appended to file!');
        // })
    // }
    
})
// app.post('/upload_imgs', function (req, res) {
//     console.log(req.files[0]);  // 上传的文件信息
//     var des_file = __dirname + "/" + req.files[0].originalname;
//     fs.readFile(req.files[0].path, function (err, data) {
//         fs.writeFile(des_file, data, function (err) {
//             if (err) {
//                 console.log(err);
//             } else {
//                 response = {
//                     message: 'File uploaded successfully',
//                     filename: req.files[0].originalname
//                 };
//             }
//             console.log(response);
//             res.end(JSON.stringify(response));
//         });
//     });
// })

var server = app.listen("8081",function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})



