# date 方法

日期数据格式化成显示格式(根据格式:Date)。

## 语法

```js
cx.formatter.date(date)
```

## 参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| date | Date \| String | 日期 |

## 返回值

(String) - 返回格式化后的日期字符串，格式为 "YYYY-MM-DD"

## 示例

```js
// 格式化日期对象
const date = new Date(2024, 0, 1);  // 2024-01-01
console.log(cx.formatter.date(date)); // 输出: "2024-01-01"

// 格式化日期字符串
console.log(cx.formatter.date('2024-01-01')); // 输出: "2024-01-01"
```

## 注意事项

1. 如果传入的是字符串，需要确保是有效的日期格式
2. 返回的日期格式固定为 "YYYY-MM-DD"
3. 如果传入的参数无效，可能会返回空字符串或抛出错误
``` 