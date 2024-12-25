# calcDayMinutes

取一天的工作分钟数。

## 语法

```javascript
calcDayMinutes(workTime) → {Number}
```

## 参数

- workTime: Array - 工作时间数组

## 返回值

- Number - 分钟数

## 描述

计算给定工作时间数组中的总分钟数。

## 示例

```javascript
const workTime = [
  {hour: 9, minute: 0},
  {hour: 17, minute: 0}
];
const minutes = cx.time.calcDayMinutes(workTime);
console.log('工作分钟数:', minutes);
```

## 注意事项

- 确保传递正确的工作时间数组
- 返回的分钟数为一天的总工作时间 