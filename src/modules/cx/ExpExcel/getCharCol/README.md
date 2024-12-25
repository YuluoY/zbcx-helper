# getCharCol

获取Excel列的字母表示。将数字列索引转换为Excel列的字母表示（如：0 -> 'A', 1 -> 'B', 26 -> 'AA'）。

## 参数
- n: `Number` - 列索引（从0开始）

## 返回值
`String` - 列的字母表示

## 示例
```javascript
// 获取列字母表示
console.log(cx.ExpExcel.getCharCol(0));  // 输出: 'A'
console.log(cx.ExpExcel.getCharCol(1));  // 输出: 'B'
console.log(cx.ExpExcel.getCharCol(25)); // 输出: 'Z'
console.log(cx.ExpExcel.getCharCol(26)); // 输出: 'AA'
console.log(cx.ExpExcel.getCharCol(27)); // 输出: 'AB'