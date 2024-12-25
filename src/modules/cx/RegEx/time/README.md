# time

时间正则表达式。

## 语法

```javascript
cx.regex.time
```

## 类型

RegExp

## 说明

用于验证时间格式（格式：H:mm:ss）。

## 示例

```javascript
// 验证时间格式
const time1 = '12:30:45';
const time2 = '9:05:00';
const time3 = '25:00:00';

console.log(cx.regex.time.test(time1));  // true
console.log(cx.regex.time.test(time2));  // true
console.log(cx.regex.time.test(time3));  // false
```

## 注意事项

- 直接通过 cx.regex.time 访问
- 使用 test() 方法进行验证
- 返回布尔值表示是否匹配
- 时间格式为：H:mm:ss
- 小时部分可以是1-2位数字
- 分钟和秒必须是2位数字 