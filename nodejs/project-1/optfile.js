var fs = require('fs');
var url = require('url');
module.exports={ 
    readImg:function(path,res){
        fs.readFile(path,'binary',function(err,file){  //binary指二进制流文件
            if(err){
                console.log(err);
            }else{
                res.write(file,'binary');
                res.end();
            }
        });
        console.log("异步方法执行完毕");
    }
}