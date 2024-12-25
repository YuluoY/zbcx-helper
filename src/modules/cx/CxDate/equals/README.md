# equals

判断两个日期是否相等。

## 语法

```javascript
static equals(date1, date2)
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| date1 | Date | 第一个日期对象 |
| date2 | Date | 第二个日期对象 |

## 返回值

| 类型 | 描述 |
|------|------|
| Boolean | 如果两个日期相等返回 true,否则返回 false |

## 描述

`equals` 方法用于判断两个日期是否相等。它会:

1. 将两个日期转换为时间戳
2. 比较两个时间戳是否相等
3. 返回比较结果

这个方法常用于:
- 日期相等性判断
- 日期匹配检查
- 日期筛选

## 示例

```javascript
// 基本使用
const date1 = new Date('2024-01-01');
const date2 = new Date('2024-01-01');
const isEqual = cx.date.equals(date1, date2);
console.log(isEqual); // 输出: true

// 不同日期比较
const date3 = new Date('2024-01-02');
console.log(cx.date.equals(date1, date3)); // 输出: false

// 在数组过滤中使用
const dates = [
    new Date('2024-01-01'),
    new Date('2024-01-02'),
    new Date('2024-01-01')
];
const targetDate = new Date('2024-01-01');
const matchingDates = dates.filter(date => 
    cx.date.equals(date, targetDate)
);
console.log(matchingDates.length); // 输出: 2

// 日期匹配检查
const schedule = {
    date: new Date('2024-01-01'),
    event: '会议'
};
const today = new Date('2024-01-01');
if (cx.date.equals(schedule.date, today)) {
    console.log('今天有安排:', schedule.event);
}
```