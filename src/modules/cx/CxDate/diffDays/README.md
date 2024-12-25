# diffDays

计算两个日期之间的天数差。

## 语法

```javascript
static diffDays(date1, date2)
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| date1 | Date | 第一个日期对象 |
| date2 | Date | 第二个日期对象 |

## 返回值

| 类型 | 描述 |
|------|------|
| Number | 返回两个日期之间的天数差值 |

## 描述

`diffDays` 方法用于计算两个日期之间相差的天数。它会:

1. 将两个日期转换为时间戳
2. 计算两个时间戳之间的差值
3. 将差值转换为天数
4. 返回整数天数

这个方法常用于:
- 计算日期间隔
- 计算工期天数
- 计算剩余天数

## 示例

```javascript
// 基本使用
const date1 = new Date('2024-01-01');
const date2 = new Date('2024-01-10');
const days = cx.date.diffDays(date1, date2);
console.log(days); // 输出: 9

// 计算工期
const projectStart = new Date('2024-01-01');
const projectEnd = new Date('2024-03-01');
const duration = cx.date.diffDays(projectStart, projectEnd);
console.log(`项目工期: ${duration}天`);

// 计算剩余天数
const today = new Date();
const deadline = new Date('2024-12-31');
const remainingDays = cx.date.diffDays(today, deadline);
console.log(`距离截止还有: ${remainingDays}天`);

// 计算年龄
const birthDate = new Date('1990-01-01');
const now = new Date();
const ageInDays = cx.date.diffDays(birthDate, now);
const ageInYears = Math.floor(ageInDays / 365);
console.log(`年龄约: ${ageInYears}岁`);
``` 