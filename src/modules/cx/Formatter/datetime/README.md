# datetime 方法

邮戳数据格式化成显示格式(根据格式:Datetime)。

## 语法

```js
cx.formatter.datetime(date)
```

## 参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| date | Date \| String | 日期 |

## 返回值

(String) - 返回格式化后的日期时间字符串，格式为 "YYYY-MM-DD HH:mm:ss"

## 示例

```js
// 格式化日期对象
const date = new Date(2024, 0, 1, 12, 30, 45);
console.log(cx.formatter.datetime(date)); 
// 输出: "2024-01-01 12:30:45"

// 格式化日期字符串
console.log(cx.formatter.datetime('2024-01-01 12:30:45')); 
// 输出: "2024-01-01 12:30:45"

// 格式化当前时间
console.log(cx.formatter.datetime(new Date())); 
// 输出当前时间，如: "2024-03-15 09:30:00"
```

## 注意事项

1. 参数可以是 Date 对象或日期时间字符串
2. 返回的格式固定为 "YYYY-MM-DD HH:mm:ss"
3. 时间部分使用24小时制
4. 如果传入的参数无效，可能会返回空字符串或抛出错误
``` 