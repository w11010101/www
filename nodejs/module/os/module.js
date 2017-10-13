var os = require("os");

// 返回操作系统的默认临时文件夹。

console.log("tmpdir :" + os.tmpdir());
s
// 返回 CPU 的字节序

console.log(os.endianness());

// 返回操作系统的主机名。   

console.log(os.hostname());

// 返回操作系统名

console.log(os.type());

// cpu 

console.log(os.cpus());

// 返回操作系统空闲内存量

console.log(os.freemem());

// 获得网络接口列表

console.log(os.networkInterfaces());

// 返回系统内存总量，单位为字节。

console.log(os.totalmem());



























































