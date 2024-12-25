# diffMinutes

计算一天内两个时间点之间的分钟数。

## 语法

```javascript
diffMinutes(stTime, endTime) → {Number}
```

## 参数

- stTime: Object - 起始时间
- endTime: Object - 结束时间

## 返回值

- Number - 分钟数

## 描述

计算给定起始时间和结束时间之间的分钟数。

## 示例

```javascript
const stTime = {hour: 9, minute: 0};
const endTime = {hour: 17, minute: 0};
const minutes = cx.time.diffMinutes(stTime, endTime);
console.log('分钟数:', minutes);
// 输出: 480
```

## 注意事项

- 确保传递正确的时间对象
- 返回的分钟数为两个时间点之间的差值 