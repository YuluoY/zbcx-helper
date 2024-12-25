# isDate

判断一个字符串是否为日期。

## 语法

```javascript
cx.regex.isDate
```

## 类型

RegExp

## 说明

判断一个字符串是否为有效的日期格式。

## 示例

```javascript
// 判断是否为日期
const date1 = '2024-01-20';
const date2 = '2024/01/20';
const date3 = 'invalid';

console.log(cx.regex.isDate.test(date1));  // true
console.log(cx.regex.isDate.test(date2));  // true
console.log(cx.regex.isDate.test(date3));  // false
```

## 注意事项

- 直接通过 cx.regex.isDate 访问
- 使用 test() 方法进行验证
- 返回布尔值表示是否匹配
- 支持常见的日期格式 