# getNearWeek

获取当天算起的近一周起止日期。

## 语法

```javascript
static getNearWeek()
```

## 参数
无

## 返回值

| 类型 | 描述 |
|------|------|
| Object | 返回包含近一周起止日期的对象:<br>- start: 当前日期<br>- end: 一周后的日期 |

## 描述

`getNearWeek` 方法用于获取从当前日期开始的一周时间范围。它会:

1. 获取当前日期作为开始日期
2. 计算一周后的日期作为结束日期
3. 返回包含这两个日期的对象

这个方法常用于:
- 计算近一周的数据范围
- 设置周时间选择器
- 周数据统计分析

## 示例

```javascript
// 获取近一周日期范围
const weekRange = cx.date.getNearWeek();
console.log(weekRange);
// 输出类似: 
// { 
//   start: Date("2024-01-15"), // 当前日期
//   end: Date("2024-01-21")    // 一周后
// }

// 用于数据查询
const queryData = {
    startDate: weekRange.start,
    endDate: weekRange.end,
    type: 'weekly'
};

// 格式化显示
console.log(`开始日期: ${weekRange.start.toLocaleDateString()}`);
console.log(`结束日期: ${weekRange.end.toLocaleDateString()}`);

// 在日期选择器中使用
const datePicker = {
    defaultRange: weekRange,
    minDate: weekRange.start,
    maxDate: weekRange.end
};

// 计算日期差
const diffDays = cx.date.diffDays(weekRange.start, weekRange.end);
console.log(`时间范围: ${diffDays}天`);

// 用于周报时间范围
const weeklyReport = {
    title: `周报(${weekRange.start.toLocaleDateString()} - ${weekRange.end.toLocaleDateString()})`,
    dateRange: weekRange,
    content: '本周工作总结...'
};
``` 