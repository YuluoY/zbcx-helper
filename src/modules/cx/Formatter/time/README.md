# time 方法

时间数据格式化成显示格式。

## 语法

```js
cx.formatter.time(date, hideSecond)
```

## 参数

| 参数名 | 类型 | 必填 | 默认值 | 说明 |
|--------|------|------|--------|------|
| date | Date | 是 | - | 时间 |
| hideSecond | Boolean | 否 | false | 是否隐藏秒 |

## 返回值

(String) - 返回格式化后的时间字符串，格式为：
- 显示秒时："HH:mm:ss"
- 隐藏秒时："HH:mm"

## 示例

```js
// 格式化时间（显示秒）
const date = new Date(2024, 0, 1, 12, 30, 45);
console.log(cx.formatter.time(date)); 
// 输出: "12:30:45"

// 格式化时间（隐藏秒）
console.log(cx.formatter.time(date, true)); 
// 输出: "12:30"

// 格式化午夜时间
const midnight = new Date(2024, 0, 1, 0, 0, 0);
console.log(cx.formatter.time(midnight)); 
// 输出: "00:00:00"
```

## 注意事项

1. 如果传入的是字符串，需要确保是有效的时间格式
2. hideSecond 参数可以控制是否显示秒
3. 返回的时间格式使用24小时制
4. 如果传入的参数无效，可能会返回空字符串或抛出错误 