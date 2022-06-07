"use strict";

var fs = require("fs");
var path = require("path");

var position = path.join(__dirname, "fruit.txt");

// 1.读取目录
fs.readdir(path.join(__dirname), "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

// 2.追加写入文件
var item = "苹果";
fs.appendFile(position, item, (err, data) => {
  if (!err) {
    console.log('写入ok');
  }
});

// 3.检测目录是否存在
const b = fs.existsSync(position)
console.log(b)

// 4.拷贝文件
// fs.copyFileSync(position, path.join(__dirname, "fruit2.txt"))

// 5.删除文件
fs.unlinkSync(path.join(__dirname, "fruit2.txt"))