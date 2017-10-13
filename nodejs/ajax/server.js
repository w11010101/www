var express = require('express');
var app = express();
var fs = require("fs");
var http = require("http");
var server = http.createServer()
// get
// app.use(express.static('public'));

// app.get('/index.html', function(req, res) {
//     console.log(__dirname);
//     res.sendFile(__dirname + "/" + "index.html");
// })

// app.get('/process_get', function(req, res) {

//     // 输出 JSON 格式
//     var response = {
//         "first_name": req.query.first_name,
//         "last_name": req.query.last_name
//     };
//     console.log(response);
//     res.end(JSON.stringify(response));
// })


// %SystemRoot%\system32;
// %SystemRoot%;
// %SystemRoot%\System32\Wbem;
// %SYSTEMROOT%\System32\WindowsPowerShell\v1.0\;
// arrow ;
// C:\Program Files (x86)\ATI Technologies\ATI.ACE\Core-Static;
// E:\node\;
// E:\svn\bin;
// E:\Git\cmd

app.all("/abc",function (req,res){

})


// post
var bodyParser = require('body-parser');

var multer  = require('multer');
 
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}).array('image'));
 
app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})
 
app.post('/file_upload', function (req, res) {
 
   console.log(req.files[0]);  // 上传的文件信息
 
   var des_file = __dirname + "/" + req.files[0].originalname;
   fs.readFile( req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
         if( err ){
              console.log( err );
         }else{
               response = {
                   message:'File uploaded successfully', 
                   filename:req.files[0].originalname
              };
          }
          console.log( response );
          res.end( JSON.stringify( response ) );
       });
   });
})
 

var server = app.listen(3000, function() {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})