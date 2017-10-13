// // 表示当前正在执行的脚本的文件名
// console.log("__filename : " + __filename);

// // 表示当前执行脚本所在的目录
// console.log("__dirname : " + __dirname);

// // 延迟
// var timeOut = setTimeout(function (){
//     console.log("clearTimeout : interVal ");
//     clearTimeout(interVal);
// },3000);

// // 清除


// // 定时器
// var x = 0
// var interVal = setInterval(function (){
//     console.log("interVal : " + (++x));
// },500);

// console
// console.log('Hello world'); 
// console.log('byvoid%diovyb'); 
// // console.log('star %d %f %s %o  end', 1991,12.2323,"string",obj2); 
// console.log("%d",11111111);
// console.log("圆周率是%f",3.1415926);


// var obj1 = function (){
//     this.a = 1;
// }
// var obj2 = {
//     a:2
// }

process.on('exit', function(code) {

  // 以下代码永远不会执行
  // setTimeout(function() {
    console.log("该代码不会执行");
  // }, 120);
  
  console.log('退出码为:', code);
});
console.log("程序执行结束");






















































