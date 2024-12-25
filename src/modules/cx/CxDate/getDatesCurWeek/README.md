# getDatesCurWeek

获取本周的起止日期。

## 语法

```javascript
static getDatesCurWeek()
```

## 参数
无

## 返回值

| 类型 | 描述 |
|------|------|
| Object | 返回包含本周起止日期的对象:<br>- start: 本周第一天的日期<br>- end: 本周最后一天的日期 |

## 描述

`getDatesCurWeek` 方法用于获取当前周的起始和结束日期。它会:

1. 获取当前日期
2. 计算本周的第一天(周一)
3. 计算本周的最后一天(周日)
4. 返回包含这两个日期的对象

这个方法常用于:
- 周报日期范围
- 周数据统计
- 周历显示

## 示例

```javascript
// 获取本周日期范围
const weekRange = cx.date.getDatesCurWeek();
console.log(weekRange);
// 输出类似: 
// { 
//   start: Date("2024-01-01"), // 周一
//   end: Date("2024-01-07")    // 周日
// }

// 用于数据查询
const queryData = {
    startDate: weekRange.start,
    endDate: weekRange.end
};

// 格式化显示
console.log(`本周开始: ${weekRange.start.toLocaleDateString()}`);
console.log(`本周结束: ${weekRange.end.toLocaleDateString()}`);

// 在日期选择器中使用
const datePicker = {
    minDate: weekRange.start,
    maxDate: weekRange.end,
    defaultValue: new Date()
};
``` 