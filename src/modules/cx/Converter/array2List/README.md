# array2List

数组转列表。

## 语法

```javascript
Converter.array2List(array)
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| array | Array | 要转换的数组 |

## 返回值

| 类型 | 描述 |
|------|------|
| String | 转换后的列表字符串 |

## 描述

将数组转换为列表字符串格式。数组元素之间使用逗号分隔。

## 示例

```javascript
// 基本使用
const list = cx.converter.array2List(['a', 'b', 'c']);
console.log(list); // 输出: 'a,b,c'

// 转换数字数组
const numList = cx.converter.array2List([1, 2, 3]);
console.log(numList); // 输出: '1,2,3'

// 转换混合类型数组
const mixedList = cx.converter.array2List(['a', 1, true]);
console.log(mixedList); // 输出: 'a,1,true'
``` 