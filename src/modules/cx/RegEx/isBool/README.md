# isBool

判断一个字符串是否为布尔值。

## 语法

```javascript
cx.regex.isBool
```

## 类型

RegExp

## 说明

判断一个字符串是否为布尔值（true或false）。

## 示例

```javascript
// 判断是否为布尔值
const value1 = 'true';
const value2 = 'false';
const value3 = 'other';

console.log(cx.regex.isBool.test(value1));  // true
console.log(cx.regex.isBool.test(value2));  // true
console.log(cx.regex.isBool.test(value3));  // false
```

## 注意事项

- 直接通过 cx.regex.isBool 访问
- 使用 test() 方法进行验证
- 返回布尔值表示是否匹配
- 只识别字符串 'true' 或 'false' 