var optfile = require("./openFile");
var fs = require("fs");
var imgSrc = "../images/";
var jsFile = "../plugin/"
function getRecall(req,res){
    res.writeHead(200,{'Content-Type':'text/html', 'Access-Control-Allow-Origin': '*','charset':'utf-8'});
    function recall(data){
        res.write(data);
        res.end();
    }
    return recall;
}

module.exports = {
    html:function(req,res){        
        recall = getRecall(req,res);
        // optfile.readfile("./router.html",recall);
        fs.readFile("./router.html",function(err,file){
            if(err){
                console.log(err);
            }else{
                recall(file)
            }

        })
    },
    showimg:function(req,res,img){
        // console.log(img)
        // res.writeHead(200,{'Content-Type':'text/html', 'Access-Control-Allow-Origin': '*','charset':'utf-8'});
        // res.write(this.toString());
        // res.end();
        res.writeHead(200,{'Content-Type':'image/jpeg', 'Access-Control-Allow-Origin': '*','charset':'utf-8'});
        optfile.readImg(imgSrc+img,res);
    },
    plugin:function(req,res,js){
        // console.log(123132312312)
        res.writeHead(200,{'Content-Type':'application/x-javascript', 'Access-Control-Allow-Origin': '*','charset':'utf-8'});
        recall = getRecall(req,res);
        optfile.readfile(jsFile+js,recall);
    }
}