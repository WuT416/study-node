"use strict";

// 引用模块
var greet = require("./hello-someone");
var s = "vivian";
greet(s);

// 全局属性global
console.log(global.console)

// 程序即将退出时的回调函数:
process.on('exit', function (code) {
    console.log('about to exit with code: ' + code);
});