# timestamp

时间戳正则表达式。

## 语法

```javascript
cx.regex.timestamp
```

## 类型

RegExp

## 说明

用于验证时间戳格式（格式：yyyy-MM-dd H:m:s.SSS）。

## 示例

```javascript
// 验证时间戳格式
const ts1 = '2024-01-20 12:30:45.123';
const ts2 = '2024-01-20 9:5:0.001';
const ts3 = '2024-01-20';

console.log(cx.regex.timestamp.test(ts1));  // true
console.log(cx.regex.timestamp.test(ts2));  // true
console.log(cx.regex.timestamp.test(ts3));  // false
```

## 注意事项

- 直接通过 cx.regex.timestamp 访问
- 使用 test() 方法进行验证
- 返回布尔值表示是否匹配
- 时间戳格式为：yyyy-MM-dd H:m:s.SSS
- 年月日必须使用连字符(-)分隔
- 时分秒必须使用冒号(:)分隔
- 毫秒部分必须使用点(.)分隔 