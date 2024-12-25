# isNumber

判断一个字符串是否为数字。

## 语法

```javascript
cx.regex.isNumber
```

## 类型

RegExp

## 说明

判断一个字符串是否为有效的数字值，包括整数和小数。

## 示例

```javascript
// 判断是否为数字
const value1 = '123';
const value2 = '-456.789';
const value3 = '.123';
const value4 = 'abc';

console.log(cx.regex.isNumber.test(value1));  // true
console.log(cx.regex.isNumber.test(value2));  // true
console.log(cx.regex.isNumber.test(value3));  // true
console.log(cx.regex.isNumber.test(value4));  // false
```

## 注意事项

- 直接通过 cx.regex.isNumber 访问
- 使用 test() 方法进行验证
- 返回布尔值表示是否匹配
- 支持整数和小数
- 支持正数和负数
- 支持科学计数法
``` 
</rewritten_file>