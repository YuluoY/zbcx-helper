# data2String

对象转换成字符串。

## 语法

```javascript
Converter.data2String(data, strict)
```

## 参数

| 参数名 | 类型 | 是否可选 | 默认值 | 描述 |
|--------|------|----------|---------|------|
| data | Object | 否 | - | 要转换的对象 |
| strict | Boolean | 是 | false | 是否严格类型检查 |

## 返回值

| 类型 | 描述 |
|------|------|
| String | 转换后的字符串 |

## 描述

将对象转换为字符串格式。如果启用严格类型检查,则会对对象的类型进行验证。

## 示例

```javascript
// 基本使用
const obj = {name: 'test', age: 25};
const str = cx.converter.data2String(obj);
console.log(str); // 输出: '{"name":"test","age":25}'

// 使用严格模式
const str2 = cx.converter.data2String(obj, true);

// 转换数组
const arr = [1, 2, 3];
const str3 = cx.converter.data2String(arr);
console.log(str3); // 输出: '[1,2,3]'

// 转换基本类型
console.log(cx.converter.data2String(123)); // 输出: '123'
console.log(cx.converter.data2String('test')); // 输出: 'test'
console.log(cx.converter.data2String(true)); // 输出: 'true'
``` 