var optfile = require('./optfile');
function getRecall(req,res){
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    function recall(data){
            res.write(data);
            res.end('');
    }
    return recall;
}
module.exports={
    login:function(req,res){
        // function recall(data){
        //     res.write(data);
        //     res.end('');
        // }
        recall = getRecall(req,res);
        optfile.readfile('./views/login.html',recall);
    },
    
    showimg:function(req,res){
        res.writeHead(200,{'Content-Type':'image/jpeg'});
        optfile.readImg('./imgs/scenery.png',res);
    }
}