var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/doc/uploaded/' }).array('images'));

app.get("/upload", function (req, res) {
    res.sendFile(__dirname + "/app.html");
})


app.post('/file_upload', function (req, res) {

    console.log(req.files);  // 上传的文件信息
    for(var f of req.files){
        var des_file = __dirname + "/" + f.originalname;
        fs.readFileSync(f.path, function (err, data) {

            fs.writeFileSync(des_file, data, function (err) {
                if (err) {
                    console.log(err);
                } else {
                    response = {
                        message: 'File uploaded successfully',
                        filename: f.originalname
                    };
                }
                console.log(response);
                res.end(JSON.stringify(response));
            });
        });
     }
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})