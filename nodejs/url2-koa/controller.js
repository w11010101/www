// 先导入fs模块，然后用readdirSync列出文件
const fs = require("fs");
const router = require("koa-router")();
// 这里可以用sync是因为启动时只运行一次，不存在性能问题:
var files = fs.readdirSync(__dirname + '/controllers');
// console.log(files);

// 过滤出.js文件:
var js_files = files.filter((f) =>{
    return f.endsWith(".js");
})
// console.log("js_files: ",js_files);

// 处理每个js文件:
for(var f of js_files){
    // console.log(`process controller: ${f} ...`);
    let mapping = require(__dirname + "/controllers/"+f);
    // console.log(`mapping[f] = `,f)
    for(var url in mapping){
        if(url.startsWith("GET ")){
            // 如果url类似"GET xxx":
            var path = url.substring(4);
            router.get(path,mapping[url]);
            // console.log(`register URL mapping: GET ${path}`);
        }else if(url.startsWith("POST ")){
            // 如果url类似"POST xxx":
            var path = url.substring(5);
            router.post(path,mapping[url]);
            // console.log(`register URL mapping: POST ${path}`);
        }else{
             // 无效的URL:
             console.log(`invalid URL: ${url}`);
        }
    }
}

module.exports = function (){
    return router.routes();
}
// app.use(router.routes());