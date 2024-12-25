# diffDat

计算两个日期之间的差值。

## 语法

```javascript
static diffDat(date1, date2)
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| date1 | Date | 第一个日期对象 |
| date2 | Date | 第二个日期对象 |

## 返回值

| 类型 | 描述 |
|------|------|
| Number | 返回两个日期之间的毫秒差值 |

## 描述

`diffDat` 方法用于计算两个日期之间的时间差值。它会:

1. 将两个日期转换为时间戳
2. 计算两个时间戳之间的差值
3. 返回毫秒级的差值

这个方法常用于:
- 计算时间间隔
- 计算持续时间
- 日期差值计算

## 示例

```javascript
// 基本使用
const date1 = new Date('2024-01-01');
const date2 = new Date('2024-01-02');
const diff = cx.date.diffDat(date1, date2);
console.log(diff); // 输出: 86400000 (一天的毫秒数)

// 计算小时差
const hoursDiff = diff / (1000 * 60 * 60);
console.log(hoursDiff); // 输出: 24

// 计算天数差
const daysDiff = diff / (1000 * 60 * 60 * 24);
console.log(daysDiff); // 输出: 1

// 计算时间间隔
const start = new Date();
// ... 执行一些操作
setTimeout(() => {
    const end = new Date();
    const duration = cx.date.diffDat(start, end);
    console.log(`操作耗时: ${duration}毫秒`);
}, 1000);
``` 