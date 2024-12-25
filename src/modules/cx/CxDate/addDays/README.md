# addDays

日期增加指定的天数。

## 语法

```javascript
static addDays(_date, nDays)
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| _date | Date | 要增加天数的日期对象 |
| nDays | Number | 要增加的天数 |

## 返回值

| 类型 | 描述 |
|------|------|
| Date | 返回增加天数后的新日期对象 |

## 描述

`addDays` 方法用于给指定日期增加天数。它会:

1. 创建一个新的日期对象(不修改原始日期)
2. 将指定的天数添加到该日期
3. 返回新的日期对象

这个方法常用于:
- 计算未来日期
- 日期范围计算
- 截止日期计算

## 示例

```javascript
// 基本使用
const today = new Date();
const nextWeek = cx.date.addDays(today, 7);
console.log(nextWeek); // 输出7天后的日期

// 计算截止日期
const deadline = cx.date.addDays(today, 30);
console.log(deadline); // 输出30天后的日期

// 计算过去日期
const lastWeek = cx.date.addDays(today, -7);
console.log(lastWeek); // 输出7天前的日期

// 在日期范围计算中使用
const startDate = new Date('2024-01-01');
const dates = [0, 7, 14, 21].map(days => 
    cx.date.addDays(startDate, days)
);
console.log(dates); // 输出一系列日期
``` 