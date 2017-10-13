'use strict';
var greet = require("./hello");
// greet('小明');
// var txt = requier("./txt/countries.txt");
var fs = require("fs");
var zlib = require("zlib");

// fs.readFile("./test.txt","utf-8",function(err,data){
//     if(err){
//         console.log("err: ",err);
//     }else{
//         console.log("data: ",data);
//     }
// });

// var data = "hello, node js!";
// fs.writeFile("./test.txt",data,function(err,data){
//     if(err){
//         console.log("err: ",err);
//     }else{
//         console.log("data: ",data);
//     }
// })

// var data = "hello, node js!";
// fs.stat("./test.txt",function(err,stat){
//     if(err){
//         console.log("err: ",err);
//     }else{
//         // console.log("stat: ",stat);
//         console.log('isFile: ' + stat.isFile());
//         console.log('isDirectory: ' + stat.isDirectory());

//         if(stat.isFile()){
//             console.log('size: ',stat.size);
//             console.log('birth: ',stat.birthtime);
//             console.log('modified: ',stat.mtime);
//         }
//     }
// })

// 数据流
// 数据读取的流
// function readfile(){
//     var rs = fs.createReadStream("./test.txt","utf-8");
    
//     rs.on("data",function (chunk){
//         console.log("chunk: ",chunk);
//     });
//     rs.on("end",function(stat){
//         console.log("stat: ",stat);
//     })
//     rs.on("error",function(err){
//         console.log("err: ",err);
//     })
// }
// readfile();
// 数据写入的流
// var ws1 = fs.createWriteStream("./test.txt","utf-8");
// // ws1.write(new Buffer('111111222222阿斯顿发生的发阿斯顿放假吗...\n','utf-8'));
// // ws1.write('<div>12312123</div>\n')
// ws1.write("有些流用来读取数据，比如从文件文件写入数据\n");
// ws1.write("end\n");
// ws1.end();
  
// var buf = Buffer.from('hello world', 'ascii');
// console.log(buf.toString("ascii"))
// readfile();


//pipe
// var rs = fs.createReadStream("test.txt");
// var ws = fs.createWriteStream("output1.txt");
// rs.pipe(ws);

// 链式流
// 压缩
// fs.createReadStream("test.txt")
// .pipe(zlib.createGzip())
// .pipe(fs.createWriteStream("test.txt.gz"));

// console.log('文件压缩完成')
// 解压
// fs.createReadStream("test.txt.gz")
// .pipe(zlib.createGunzip())
// .pipe(fs.createWriteStream("test.txt"))
// console.log('文件解压完成')


fs.createReadStream("output1.txt")
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream("test.txt.gz"));


// 箭头函数
// var fn = (abc) =>{
//     console.log(abc)
// }
// fn(123)


