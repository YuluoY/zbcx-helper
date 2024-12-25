# getNearMonth

获取当天算起的近一个月起止日期。

## 语法

```javascript
static getNearMonth()
```

## 参数
无

## 返回值

| 类型 | 描述 |
|------|------|
| Object | 返回包含近一个月起止日期的对象:<br>- start: 当前日期<br>- end: 一个月后的日期 |

## 描述

`getNearMonth` 方法用于获取从当前日期开始的一个月时间范围。它会:

1. 获取当前日期作为开始日期
2. 计算一个月后的日期作为结束日期
3. 返回包含这两个日期的对象

这个方法常用于:
- 计算近一个月的数据范围
- 设置时间范围选择器
- 数据统计分析

## 示例

```javascript
// 获取近一个月日期范围
const monthRange = cx.date.getNearMonth();
console.log(monthRange);
// 输出类似: 
// { 
//   start: Date("2024-01-15"), // 当前日期
//   end: Date("2024-02-14")    // 一个月后
// }

// 用于数据查询
const queryData = {
    startDate: monthRange.start,
    endDate: monthRange.end,
    type: 'monthly'
};

// 格式化显示
console.log(`开始日期: ${monthRange.start.toLocaleDateString()}`);
console.log(`结束日期: ${monthRange.end.toLocaleDateString()}`);

// 在日期选择器中使用
const datePicker = {
    defaultRange: monthRange,
    minDate: monthRange.start,
    maxDate: monthRange.end
};

// 计算日期差
const diffDays = cx.date.diffDays(monthRange.start, monthRange.end);
console.log(`时间范围: ${diffDays}天`);
``` 