# getDatesCurMonth

获取本月的起止日期。

## 语法

```javascript
static getDatesCurMonth()
```

## 参数
无

## 返回值

| 类型 | 描述 |
|------|------|
| Object | 返回包含本月起止日期的对象:<br>- start: 本月第一天的日期<br>- end: 本月最后一天的日期 |

## 描述

`getDatesCurMonth` 方法用于获取当前月份的起始和结束日期。它会:

1. 获取当前日期
2. 计算当前月份的第一天
3. 计算当前月份的最后一天
4. 返回包含这两个日期的对象

这个方法常用于:
- 月度报表日期范围
- 月度数据统计
- 月历显示

## 示例

```javascript
// 获取本月日期范围
const monthRange = cx.date.getDatesCurMonth();
console.log(monthRange);
// 输出类似: 
// { 
//   start: Date("2024-01-01"), 
//   end: Date("2024-01-31")
// }

// 用于数据查询
const queryData = {
    startDate: monthRange.start,
    endDate: monthRange.end
};

// 格式化显示
console.log(`本月开始: ${monthRange.start.toLocaleDateString()}`);
console.log(`本月结束: ${monthRange.end.toLocaleDateString()}`);

// 在日期选择器中使用
const datePicker = {
    minDate: monthRange.start,
    maxDate: monthRange.end,
    defaultValue: new Date()
};
``` 