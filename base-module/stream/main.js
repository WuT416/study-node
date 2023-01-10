"use strict"
var fs = require("fs");
var path = require("path");
var readable = path.join(__dirname, "readable.txt")
var writable = path.join(__dirname, "writable.txt")

// 创建可读流
var rs = fs.createReadStream(readable);
rs.setEncoding("utf-8");
var data = "";
rs.on("data", function (chunk) {
  data += chunk;
});
rs.on("end", function () {
  console.log(data);
});
rs.on("error", function (err) {
  console.log(err.stack);
});

console.log("读取完毕");

// 创建写入流
var data="hello vivian"
var ws = fs.createWriteStream(writable)
ws.write(data, "utf-8")
ws.end()
ws.on("finish",()=>{
  console.log("写入完成")
})
ws.on("error",(error)=>{
  console.log(error.stack)
})

console.log("写入完毕")

