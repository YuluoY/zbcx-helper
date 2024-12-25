# fillterFileName

过滤文件名，移除文件名中的非法字符。

## 参数
- str: `String` - 待过滤的文件名

## 返回值
`String` - 过滤后的文件名

## 示例
```javascript
// 过滤文件名中的特殊字符
const filename = cx.ExpExcel.fillterFileName('人员信息*?.xlsx');
console.log(filename); // 输出: '人员信息.xlsx'
``` 