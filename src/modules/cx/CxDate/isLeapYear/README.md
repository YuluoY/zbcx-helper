# isLeapYear

判断是否为闰年。

## 语法

```javascript
static isLeapYear(year)
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| year | Number \| String | 待判断的年份或日期对象 |

## 返回值

| 类型 | 描述 |
|------|------|
| Boolean | 判断结果，如果是闰年返回 true，否则返回 false |

## 描述

`isLeapYear` 方法用于判断指定的年份是否为闰年。它会:

1. 如果传入的是日期对象，则提取其年份
2. 根据闰年规则进行判断:
   - 能被4整除但不能被100整除的年份是闰年
   - 能被400整除的年份是闰年

这个方法常用于:
- 日期计算
- 日历显示
- 获取月份天数

## 示例

```javascript
// 使用年份判断
console.log(cx.date.isLeapYear(2024)); // true
console.log(cx.date.isLeapYear(2023)); // false
console.log(cx.date.isLeapYear(2000)); // true
console.log(cx.date.isLeapYear(1900)); // false

// 使用日期对象判断
const date = new Date('2024-01-01');
console.log(cx.date.isLeapYear(date)); // true

// 在日期计算中使用
function getDaysInFebruary(year) {
    return cx.date.isLeapYear(year) ? 29 : 28;
}

// 在日历组件中使用
function getMonthDays(year, month) {
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month === 1 && cx.date.isLeapYear(year)) { // 2月
        return 29;
    }
    return monthDays[month];
}
``` 