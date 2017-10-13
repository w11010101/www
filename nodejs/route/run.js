// var service = require("./service");
// var routes = require("./route");

// service.start(routes.route);

// **************************************************
var util = require("util");
// 常用工具 util
// util 是一个Node.js 核心模块，提供常用函数的集合，用于弥补核心JavaScript 的功能 过于精简的不足。
function Base(){
    this.name = "base";
    this.base = "1991";
    this.sayHello = function(){
        console.log("hello : "+this.name);
    };
}
Base.prototype.showName = function(){
    console.log("showName : "+this.name);
}
function Sub(){
    this.name = "sub";

}

util.inherits(Sub,Base);
var objBase = new Base();
// objBase.showName();
// objBase.sayHello();
// console.log(objBase);
// var objSub = new Sub();
// objSub.showName();
// // objSub.sayHello();
// console.log(objSub);

// util.inspect(obj,[showHidden],[depth],[color]);
// console.log(util.inspect(objBase))
// console.log(util.inspect(objBase,true))
