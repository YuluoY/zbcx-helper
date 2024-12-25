# stringToArrayBuffer

将字符串转换为字符流（ArrayBuffer）。

## 参数
- str: `String` - 待转成字符流的字符串

## 返回值
`ArrayBuffer` - 转换后的字符流

## 示例
```javascript
// 将字符串转换为ArrayBuffer
const str = '测试文本';
const buffer = cx.ExpExcel.stringToArrayBuffer(str);
console.log(buffer instanceof ArrayBuffer); // 输出: true
``` 