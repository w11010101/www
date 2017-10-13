// 导入http模块:
var fs = require("fs");
var http = require("http");
var url  = require("url");
var path = require("path");

// 创建http server，并传入回调函数:
// var server = http.createServer(function(req,res){
//     console.log(req.method+" : "+req.url);
//     res.writeHead(200, {"Content-type":"text/html"});
//     res.end('<h1>Hello word</h1>');
// });
// 让服务器监听8080端口:
// server.listen(8080);

// console.log('Server is running at http://127.0.0.1:8080/');
// -----------------------------------------------------------
// url

// console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));
// -----------------------------------------------------------
// 解析当前目录:
// var work = path.resolve(".");

// // 组合完整的文件路径:当前目录+'pub'+'index.html':
// var filePath = path.join(work,"pub","index.html");

// console.log(filePath);

// process 为全局变量
// console.log(process.env.PATH);
// -----------------------------------------------------------
// 从命令行参数获取root目录，默认是当前目录:
var root = path.resolve(process.argv[2] || ".");
// var setPath = path.resolve('/foo/bar', './baz');
// console.log(setPath);
// console.log(process.argv[2]);
// console.log(process.argv[2] || ".")
// 

// url.parse(urlString[, parseQueryString[, slashesDenoteHost]])
console.log("Static root dir : ",root);
// console.log(path.join())
var server = http.createServer(function(req,res){
    // 获得URL的path，类似 '/css/bootstrap.css':
    // console.log("req.url: ",req.url)
    var pathName = url.parse(req.url).pathname;
    
    var filepath = path.join(root,pathName);

    // console.log("pathName: ",pathName);
    console.log("filepath: ",filepath);
    // res.write("pathName: "+pathName+"\n");
    // res.write("root: "+root+"\n");
    // res.write("filepath: "+filepath);
    // res.end()


    fs.stat(filepath,function(err,stats){
        if(!err && stats.isFile()){
            // 没有出错并且文件存在:
            console.log("200 "+ req.url);
            // 发送200响应:
            res.writeHead(200);
            // 将文件流导向response:
            fs.createReadStream(filepath).pipe(res);
            // res.end()
        }else{
            // 出错了或者文件不存在:
            console.log("404 "+req.url);
            // 发送404响应:
            res.writeHead("404");
            res.end("404 not found")
        }
    })
})

server.listen(8080);
console.log("Server is running at http://127.0.0.1:8080/");














































