# getDatesPreWeek

获取上周的起止日期。

## 语法

```javascript
static getDatesPreWeek()
```

## 参数
无

## 返回值

| 类型 | 描述 |
|------|------|
| Object | 返回包含上周起止日期的对象:<br>- start: 上周第一天的日期(周一)<br>- end: 上周最后一天的日期(周日) |

## 描述

`getDatesPreWeek` 方法用于获取上周的起始和结束日期。它会:

1. 获取当前日期
2. 计算上周的第一天(周一)
3. 计算上周的最后一天(周日)
4. 返回包含这两个日期的对象

这个方法常用于:
- 上周报表日期范围
- 周环比数据对比
- 历史周数据查询

## 示例

```javascript
// 获取上周日期范围
const lastWeekRange = cx.date.getDatesPreWeek();
console.log(lastWeekRange);
// 输出类似: 
// { 
//   start: Date("2023-12-25"), // 上周一
//   end: Date("2023-12-31")    // 上周日
// }

// 用于周环比数据查询
const queryData = {
    lastWeek: {
        startDate: lastWeekRange.start,
        endDate: lastWeekRange.end
    },
    thisWeek: {
        startDate: cx.date.getDatesCurWeek().start,
        endDate: cx.date.getDatesCurWeek().end
    }
};

// 格式化显示
console.log(`上周开始: ${lastWeekRange.start.toLocaleDateString()}`);
console.log(`上周结束: ${lastWeekRange.end.toLocaleDateString()}`);

// 在周报中使用
const weeklyReport = {
    title: `第${Math.ceil(lastWeekRange.start.getDate() / 7)}周报告`,
    dateRange: lastWeekRange
};
``` 