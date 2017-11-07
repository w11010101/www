var http = require('http');
var fs = require("fs"); // 文件系统
// var url = require("url");
var querystring = require('querystring');
// var events = require("events");
// var user = require("./user");


var server = http.createServer(function (request, response) {
    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200,{'Content-Type':'application/json', 'Access-Control-Allow-Origin': '*','charset':'utf-8'}); 
    // response.writeHead(200,{'Content-Type':'application/x-javascript', 'Access-Control-Allow-Origin': '*','charset':'utf-8'}); 
    if(request.url!=="/favicon.ico"){
        // 定义了一个post变量，用于暂存请求体的信息
        var post = "";
        // 通过request的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
        request.on('data',function(chunk){
            post += chunk;
        });
        // 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
        request.on('end',function(){
            
            post = querystring.parse(post);
            switch (post.type){
                case "response":
                    loadFile("response/response.json");
                break;
                case "response1":
                    loadFile("response/response1.json");
                break;
                case "response2":
                    loadFile("response/response2.json");
                break;
                case "queries":
                    loadFile("json/queries.json");
                break;
                case "list":
                    loadFile("json/queries.json");
                break;
                case "echarts":

                    var data = {
                        "pageName":post.pageName,
                        "bar":{

                        },
                        "pie":{

                        }
                    }
                    switch(post.pageName){
                        case "tongji":
                            // bar
                            if(post.sellers == "all"){
                                // bar
                                data.bar["barArr"] = [201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220];
                                data.bar["lineArr"] = getRandomm(20, 100);
                                data.bar["lineArr_val"] = function() {
                                    var arr = getRandomm(20, 1000);
                                    var newArr = [];
                                    for (var i in arr) {
                                        newArr.push({
                                            name: arr[i],
                                            value: arr[i],
                                            symbol: "circle",
                                            symbolSize: "10", 
                                        })
                                    }
                                    return newArr;
                                }();
                                data.bar["barArr_val"] = getRandomm(20, 10000);
                                data.bar["barColor"] = "#71d6f5";
                                data.bar["end"] = 25;
                                // pie
                                data.pie["vals"] = [2300, 1250, 1000, 1700];
                                data.pie["names"] = ["pie1","pie2","pie3","pie4"];
                                data.pie["color"] = ['#00e897', '#42c3ef', '#0096d2', '#fdab06'];

                            }else{
                                // bar
                                var month = new Date().getMonth()+1;
                                data.bar["barArr"] = [(month-5)+"月",(month-4)+"月",(month-3)+"月",(month-2)+"月",(month-1)+"月",month+"月"];
                                data.bar["lineArr"] = getRandomm(20, 100);
                                data.bar["lineArr_val"] = function() {
                                    var arr = getRandomm(20, 1000);
                                    var newArr = [];
                                    for (var i in arr) {
                                        newArr.push({
                                            name: arr[i],
                                            value: arr[i],
                                            symbol: "circle",
                                            symbolSize: "10", 
                                        })
                                    }
                                    return newArr;
                                }();
                                data.bar["barArr_val"] = getRandomm(20, 10000);
                                data.bar["barColor"] = "#bcffbf";
                                data.bar["end"] = 100;
                                // pie
                                data.pie["vals"]  = getRandomm(6, 5000);
                                data.pie["names"] = [(month-5)+"月",(month-4)+"月",(month-3)+"月",(month-2)+"月",(month-1)+"月",month+"月"];
                                data.pie["color"] = ['#00e897', '#42c3ef', '#0096d2', '#fdab06',"#71d6f5","#ee5b16"]  
                            }
                            
                        break;
                        case "chaliushui":
                            
                        break;
                        case "guanli":
                            
                            if(post.sellers == "all"){
                                // 图表1 bar and line
                                data.bar["barArr"] = ["商户1","商户2","商户3","商户4","商户5","商户6","商户7","商户8","商户9","商户10","商户11","商户12","商户13","商户14","商户15"];
                                data.bar["lineArr"] = getRandomm(15, 100);
                                data.bar["lineArr_val"] = function() {
                                    var arr = getRandomm(15, 1000);
                                    var newArr = [];
                                    for (var i in arr) {
                                        newArr.push({
                                            name: arr[i],
                                            value: arr[i],
                                            symbol: "circle",
                                            symbolSize: "10", 
                                        })
                                    }
                                    return newArr;
                                }();
                                data.bar["barArr_val"] = getRandomm(15, 10000);
                                data.bar["barColor"] = "#71d6f5";
                                data.bar["end"] = 30;
                                // 图表2 pie

                                data.pie["vals"]  = getRandomm(6, 10000);
                                data.pie["names"] = ["商户1","商户2","商户3","商户4","商户5","商户6"];
                                data.pie["color"] = ['#00e897', '#42c3ef', '#0096d2', '#fdab06',"#71d6f5","#ee5b16"]; 
                            }else{
                                // 图表1 bar and line
                                data.bar["barArr"] = ["商户1"];
                                data.bar["lineArr"] = getRandomm(1, 100);
                                data.bar["lineArr_val"] = function() {
                                    var arr = getRandomm(15, 1000);
                                    var newArr = [];
                                    for (var i in arr) {
                                        newArr.push({
                                            name: arr[i],
                                            value: arr[i],
                                            symbol: "circle",
                                            symbolSize: "10", 
                                        })
                                    }
                                    return newArr;
                                }();
                                data.bar["barArr_val"] = getRandomm(1, 10000);
                                data.bar["barColor"] = "#71d6f5";
                                data.bar["end"] = 10;
                                // 图表2 pie
                                data.pie["vals"]  = getRandomm(1, 10000);
                                data.pie["names"] = ["扫一扫"];
                                data.pie["color"] = ['#00e897']; 
                            }
                        break;
                    }
                    // response.write();
                    response.end(JSON.stringify(data));
                    // loadFile("json/echarts.json");
                break;
                default :
                    loadFile("response/response4.json");
                break;
            }
        });
        // 读取文件
        function loadFile(file){
            fs.readFile(file,function(err,data){
                if(err){
                    response.write("读取文件时发生错误");
                }else{
                    response.write(data);
                }
                response.end();
            })
        }
       
    }
});

// 随机数，本地测试用
function getRandomm(i, max) {
    var arr = [];
    while (i > 0) {
        var num = Math.floor(Math.random() * max + 1);
        arr.push(num);
        i--;
    }
    return arr;
}
server.listen(3000,"localhost",function(data){
    console.log("开始监听...");
    // console.dir(url.parse);
});


