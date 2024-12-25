# diffWorkMinutes

取一天内两个时间点之间的工作时间分钟数。

## 语法

```javascript
diffWorkMinutes(stTime, endTime, workTime) → {Number}
```

## 参数

- stTime: Object - 起始时间
- endTime: Object - 结束时间
- workTime: Array - 工作时间数组

## 返回值

- Number - 分钟数

## 描述

计算给定起始时间和结束时间之间的工作时间分钟数。

## 示例

```javascript
const stTime = {hour: 9, minute: 0};
const endTime = {hour: 17, minute: 0};
const workTime = [
  {hour: 9, minute: 0},
  {hour: 17, minute: 0}
];
const minutes = cx.time.diffWorkMinutes(stTime, endTime, workTime);
console.log('工作分钟数:', minutes);
```

## 注意事项

- 确保传递正确的时间对象和工作时间数组
- 返回的分钟数为工作时间内的差值 