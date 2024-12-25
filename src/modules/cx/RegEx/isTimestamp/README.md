# isTimestamp

判断一个字符串是否为时间戳。

## 语法

```javascript
cx.regex.isTimestamp
```

## 类型

RegExp

## 说明

判断一个字符串是否为有效的时间戳格式。

## 示例

```javascript
// 判断是否为时间戳
const value1 = '2024-01-20 12:30:45.123';
const value2 = '2024-01-20';
const value3 = 'invalid';

console.log(cx.regex.isTimestamp.test(value1));  // true
console.log(cx.regex.isTimestamp.test(value2));  // false
console.log(cx.regex.isTimestamp.test(value3));  // false
```

## 注意事项

- 直接通过 cx.regex.isTimestamp 访问
- 使用 test() 方法进行验证
- 返回布尔值表示是否匹配
- 时间戳格式为：yyyy-MM-dd H:m:s.SSS
- 必须包含日期和时间部分 