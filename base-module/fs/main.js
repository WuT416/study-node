// 1.异步读取文件
"use strict";

var fs = require("fs");
var path = require("path");

// 1.异步读取文件
/* fs的路径需要的是相对于启动文件时的，而不是相对于文件的
   path.join() 方法使用特定于平台的分隔符作为定界符将所有给定的 path 片段连接在一起，然后规范化生成的路径绝对路径
*/
console.log("异步读取文件");
fs.readFile(path.join(__dirname, "food.txt"), "utf-8", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

// 2.同步读取文件
console.log("同步读取文件");
var data = fs.readFileSync(path.join(__dirname, "food.txt"), "utf-8");
console.log(data);
console.log("同步读取文件结束");

// 3.异步写文件, 整个文件被重写
var elemet = "北京烤鸭";
fs.writeFile(path.join(__dirname, "food.txt"), data + " " + elemet, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("异步写入ok");
  }
});

// 4.同步写文件, 整个文件被重写
var item = "羊肉火锅";
fs.writeFileSync(path.join(__dirname, "food.txt"), data + " " + item);

// 5.获取文件信息
fs.stat(path.join(__dirname, "food.txt"), function (err, stat) {
  if (err) {
    console.log(err);
  } else {
    console.log(stat);
  }
});
