# compare

比较两个日期。

## 语法

```javascript
static compare(date1, date2)
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| date1 | Date | 第一个日期对象 |
| date2 | Date | 第二个日期对象 |

## 返回值

| 类型 | 描述 |
|------|------|
| Number | 返回比较结果:<br>- 1: date1 大于 date2<br>- 0: date1 等于 date2<br>- -1: date1 小于 date2 |

## 描述

`compare` 方法用于比较两个日期的大小。它会:

1. 将两个日期转换为时间戳进行比较
2. 根据比较结果返回相应的数值
3. 忽略时间部分,只比较日期

这个方法常用于:
- 日期排序
- 日期范围判断
- 日期先后顺序判断

## 示例

```javascript
// 基本使用
const date1 = new Date('2024-01-01');
const date2 = new Date('2024-02-01');
const result = cx.date.compare(date1, date2);
console.log(result); // 输出: -1 (date1 < date2)

// 相等日期比较
const sameDate1 = new Date('2024-01-01');
const sameDate2 = new Date('2024-01-01');
console.log(cx.date.compare(sameDate1, sameDate2)); // 输出: 0

// 在日期排序中使用
const dates = [
    new Date('2024-03-01'),
    new Date('2024-01-01'),
    new Date('2024-02-01')
];
dates.sort((a, b) => cx.date.compare(a, b));
console.log(dates); // 按日期升序排序

// 日期范围判断
const start = new Date('2024-01-01');
const end = new Date('2024-12-31');
const target = new Date('2024-06-15');

const isInRange = 
    cx.date.compare(target, start) >= 0 && 
    cx.date.compare(target, end) <= 0;
console.log(isInRange); // 输出: true
```