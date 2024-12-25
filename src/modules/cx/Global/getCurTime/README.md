# getCurTime 方法

获取当前时间。

## 语法

```js
$g.getCurTime()
```

## 参数

无

## 返回值

(Date) - 返回当前时间的 Date 对象

## 示例

```js
// 获取当前时间
const now = $g.getCurTime();
console.log(now); // 输出当前时间的 Date 对象

// 格式化显示当前时间
const timeStr = cx.formatter.datetime($g.getCurTime());
console.log(timeStr); // 输出格式化的时间字符串，如："2024-03-15 10:30:00"
```

## 注意事项

1. 返回的是 JavaScript 的 Date 对象
2. 可以配合 formatter 类的方法进行格式化显示
3. 如果需要特定格式，建议使用 formatter 类的相应方法 