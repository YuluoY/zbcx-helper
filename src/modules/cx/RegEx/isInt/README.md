# isInt

判断一个字符串是否为整数。

## 语法

```javascript
cx.regex.isInt
```

## 类型

RegExp

## 说明

判断一个字符串是否为整数值。

## 示例

```javascript
// 判断是否为整数
const value1 = '123';
const value2 = '-456';
const value3 = '12.34';
const value4 = 'abc';

console.log(cx.regex.isInt.test(value1));  // true
console.log(cx.regex.isInt.test(value2));  // true
console.log(cx.regex.isInt.test(value3));  // false
console.log(cx.regex.isInt.test(value4));  // false
```

## 注意事项

- 直接通过 cx.regex.isInt 访问
- 使用 test() 方法进行验证
- 返回布尔值表示是否匹配
- 支持正整数和负整数
- 不支持小数和非数字字符
``` 