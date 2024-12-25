# getDaysByMonth

获取指定月份的天数。

## 语法

```javascript
static getDaysByMonth(year, month)
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| year | Number | 年份 |
| month | Number | 月份(1-12) |

## 返回值

| 类型 | 描述 |
|------|------|
| Number | 返回指定月份的天数 |

## 描述

`getDaysByMonth` 方法用于计算指定年月的天数。它会:

1. 根据年份和月份计算该月的总天数
2. 考虑闰年的情况(2月份)
3. 返回天数

这个方法常用于:
- 日历控件开发
- 日期范围验证
- 月度天数计算

## 示例

```javascript
// 获取2024年2月的天数(闰年)
const feb2024 = cx.date.getDaysByMonth(2024, 2);
console.log(feb2024); // 输出: 29

// 获取2023年2月的天数(平年)
const feb2023 = cx.date.getDaysByMonth(2023, 2);
console.log(feb2023); // 输出: 28

// 获取当前月份的天数
const now = new Date();
const currentMonthDays = cx.date.getDaysByMonth(
    now.getFullYear(),
    now.getMonth() + 1
);
console.log(`本月有 ${currentMonthDays} 天`);

// 在日历控件中使用
const calendar = {
    year: 2024,
    month: 1,
    days: cx.date.getDaysByMonth(2024, 1), // 31天
    weeks: Math.ceil(cx.date.getDaysByMonth(2024, 1) / 7)
};
``` 