# getNearThreeMonth

获取当天算起的近三个月起止日期。

## 语法

```javascript
static getNearThreeMonth()
```

## 参数
无

## 返回值

| 类型 | 描述 |
|------|------|
| Object | 返回包含近三个月起止日期的对象:<br>- start: 当前日期<br>- end: 三个月后的日期 |

## 描述

`getNearThreeMonth` 方法用于获取从当前日期开始的三个月时间范围。它会:

1. 获取当前日期作为开始日期
2. 计算三个月后的日期作为结束日期
3. 返回包含这两个日期的对象

这个方法常用于:
- 计算季度数据范围
- 设置季度时间选择器
- 季度数据统计分析

## 示例

```javascript
// 获取近三个月日期范围
const quarterRange = cx.date.getNearThreeMonth();
console.log(quarterRange);
// 输出类似: 
// { 
//   start: Date("2024-01-15"), // 当前日期
//   end: Date("2024-04-14")    // 三个月后
// }

// 用于季度数据查询
const queryData = {
    startDate: quarterRange.start,
    endDate: quarterRange.end,
    type: 'quarterly'
};

// 格式化显示
console.log(`开始日期: ${quarterRange.start.toLocaleDateString()}`);
console.log(`结束日期: ${quarterRange.end.toLocaleDateString()}`);

// 在日期选择器中使用
const datePicker = {
    defaultRange: quarterRange,
    minDate: quarterRange.start,
    maxDate: quarterRange.end
};

// 计算日期差
const diffDays = cx.date.diffDays(quarterRange.start, quarterRange.end);
console.log(`时间范围: ${diffDays}天`);

// 计算月份数
const months = Math.ceil(diffDays / 30);
console.log(`约${months}个月`);
``` 