var http = require("http");

var options = {
    host:"localhost",
    port:"2000",
    path:"/web.html",
    // method:"GET"
}

var callback = (res) =>{

    var body = "";
    res.on("data",(data) =>{
        body += data;
    });

    res.on("end",() =>{
        console.log(body);
    });

}

var req = http.request(options,callback);
console.log("client.js")
req.end();