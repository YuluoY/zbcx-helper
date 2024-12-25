# getDatesPreMonth

获取上月的起止日期。

## 语法

```javascript
static getDatesPreMonth()
```

## 参数
无

## 返回值

| 类型 | 描述 |
|------|------|
| Object | 返回包含上月起止日期的对象:<br>- start: 上月第一天的日期<br>- end: 上月最后一天的日期 |

## 描述

`getDatesPreMonth` 方法用于获取上个月的起始和结束日期。它会:

1. 获取当前日期
2. 计算上个月的第一天
3. 计算上个月的最后一天
4. 返回包含这两个日期的对象

这个方法常用于:
- 上月报表日期范围
- 环比数据对比
- 历史数据查询

## 示例

```javascript
// 获取上月日期范围
const lastMonthRange = cx.date.getDatesPreMonth();
console.log(lastMonthRange);
// 输出类似: 
// { 
//   start: Date("2023-12-01"), 
//   end: Date("2023-12-31")
// }

// 用于环比数据查询
const queryData = {
    lastMonth: {
        startDate: lastMonthRange.start,
        endDate: lastMonthRange.end
    },
    thisMonth: {
        startDate: cx.date.getDatesCurMonth().start,
        endDate: cx.date.getDatesCurMonth().end
    }
};

// 格式化显示
console.log(`上月开始: ${lastMonthRange.start.toLocaleDateString()}`);
console.log(`上月结束: ${lastMonthRange.end.toLocaleDateString()}`);

// ���报表中使用
const report = {
    title: `${lastMonthRange.start.getFullYear()}年${lastMonthRange.start.getMonth() + 1}月报表`,
    dateRange: lastMonthRange
};
``` 