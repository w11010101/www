// EventEmitter ********************************************
var events = require("events");
var event = new events.EventEmitter();

event.on("abc",function (){
    console.log(" 出发 abc 自定义事件");
});
event.on("abcd",function (){
    console.log(" 出发 abcd 自定义事件");
});
event.addListener("abc",function (){
    console.log("listener abc");
});
// setTimeout(function(){
//     event.emit("abc");
// },1000);
// setTimeout(function(){
//     event.emit("abcd");
// },2000);





















