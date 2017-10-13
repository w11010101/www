// 哈希值
// MD5 和 SHA1
const crypto = require("crypto");
// // console.log(crypto);
// const hash = crypto.createHash("sha256");
// // 可任意多次调用update()
// hash.update("hello word");

// console.log(hash.digest('hex'));
// // console.log(hash.digest('base64'));
// // console.log(hash.digest('latin1'));
// -----------------------------------------------------
// Hmac 于用MD5或SHA1不同的是，Hmac还需要一个密钥
const hmac = crypto.createHmac("sha256", "secret-key");
hmac.update("hello word");
console.log(hmac.digest("hex"));

































