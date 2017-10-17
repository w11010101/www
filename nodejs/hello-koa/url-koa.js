// 处理URL
const Koa = require("koa");

const bodyParser = require("koa-bodyparser");
// 注意require('koa-router')返回的是函数:
const router = require("koa-router")();


const app = new Koa();
// // get 
// *******************************************************************************
// // log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url} ...`);
    await next();
});

// // add url-route:
// router.get("/hello/:name",async (ctx, next) =>{
//      var name = ctx.params.name;
//      ctx.response.body = `<h1>hello , ${name} </h1>`;
// });

// router.get("/",async (ctx, next) =>{
//     ctx.response.body = `<h1>Index</h1>`;
// });

// // add router middleware
// app.use(router.routes());

// *******************************************************************************
// post

// parse request body:
app.use(bodyParser());

router.get("/",async (ctx, next) =>{
    ctx.response.body = `<h1>Index</h1>
    <form action="/signin" method="post">
        <p>Name: <input name="name" value="koa"></p>
        <p>Password: <input name="password" type="password"></p>
        <p><input type="submit" value="Submit"></p>
    </form>`;
})

router.post("/signin",async (ctx, next) =>{
    console.log("ctx.request.body = ",ctx.request.body);
    var name = ctx.request.body.name || "",
        password = ctx.request.body.password || "";

    console.log(`signin with name: ${name}, password: ${password}`);
    if(name ==="koa" && password === "123456"){
        ctx.response.body = `<h1>Wecome, ${name}!</h1>`;
    }else{
        ctx.response.body = `<h1>Login failed !</h1>
        <p><a href= "/">Try again</a></p>`;
    }
})
app.use(router.routes());
// 在端口3000监听:
app.listen(3000);
console.log("app started at port 3000 ...");

// 用户变量
// C:\Users\Administrator\AppData\Roaming\npm;
// E:\nodejs\node_globle\;
// D:\Microsoft VS Code\bin
// 系统变量
// NODE_PATH = E:\nodejs\node_globle\node_modules
// Path = %SystemRoot%\system32;
//         %SystemRoot%;
//         %SystemRoot%\System32\Wbem;
//         %SYSTEMROOT%\System32\WindowsPowerShell\v1.0\;
//         arrow ;
//         C:\Program Files (x86)\ATI Technologies\ATI.ACE\Core-Static;
//         E:\svn\bin;
//         E:\Git\cmd;
//         E:\nodejs

