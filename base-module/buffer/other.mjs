import { Buffer } from "buffer";

var bf1 = Buffer.alloc(10);
var bf2 = Buffer.alloc(10);
bf1.write("123", 1);
bf2.write("234", 1);

// 7.缓存区比较
console.log(bf1.compare(bf2))

// 8.拷贝缓存区
bf2.copy(bf1, 2)
console.log(bf1.toString("utf-8"))

// 9.缓冲区裁剪
console.log(bf2.slice(0,2).toString("utf-8"))

// 10.缓冲区长度
console.log(bf2.length)