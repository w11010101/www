console.log(process.argv);
var express = require("express");
// express.static("");
var fs = require("fs");

// function main (argv){
    
// }

// var argv = process.argv.slice(2);
// // console.log(fs.readFileSync(argv[1]));

// var bin = new Buffer([0x68, 0x65, 0x6c, 0x6c, 0x6f]);
// // console.log(bin)
// // console.log(new Buffer("王驰"))
// var dup = new Buffer("himdd");
// console.log(dup)
// bin.copy(dup);
// dup[2] = 0x56
// console.log(dup)
// console.log(dup.toString("utf-8"));
// ******************************************************************************
// var rs = fs.createReadStream("./doc/rs.txt");
// var ws = fs.createWriteStream("./doc/ws.txt")
// rs.on("data",function(chunk){
//     console.log(chunk.toString("utf-8"))
//     // var buf = new Buffer(chunk);
//     // console.log(buf.toString("utf-8"))
//     ws.write(chunk);
// });

// rs.on("end",function(){
//     ws.end()
// })
// ******************************************************************************
// ES6 构造函数的新写法（面向对象的新写法）
class Point{
    main(val){
        console.log(val*10)
    }
}
// console.log(typeof Point);
// console.log(Point === Point.prototype.constructor);
var point = new Point();
point.main(123)







