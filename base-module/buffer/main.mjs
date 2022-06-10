"use strict";

import { Buffer } from "buffer";

// 1.创建一个buffer实例
var bf1 = Buffer.alloc(10);
console.log(bf1);

// 2.创建一个初始化的buffer
var bf2 = Buffer.from([2, 3, 4, 5, 6, 7]);
console.log(bf2);

// 3. 写入缓冲区 (字符串，开始索引值)
bf1.write("hello", 1);
bf2.write("world", 1);
console.log(bf1);

// 4.读取缓存区数据
console.log(bf1.toString("utf-8"));

// 5.bf1转为json
console.log(bf1.toJSON());

// 6.缓存区合并
var bf3 = Buffer.concat([bf1, bf2]);
console.log(bf3);
console.log(bf3.toString("utf-8"));
