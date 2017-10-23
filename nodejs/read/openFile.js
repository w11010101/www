var fs = require("fs");
var url = require("url");
module.exports = {
    readfile: function(path,recall) {
        fs.readFile(path,function(err,file){
            if(err){
                // console.log(err);
            }else{
                recall(file)
            }

        })
        // console.log("异步方法执行完毕");
    },
    readImg:function(path,res){
        fs.readFile(path,'binary',function(err,file){  //binary指二进制流文件
            if(err){
                // console.log(err);
            }else{
                res.write(file,'binary');
                res.end();
            }
        });
        // console.log("异步方法执行完毕");
    }
}