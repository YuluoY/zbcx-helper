# today

取今天的日期。

## 语法

```javascript
static today()
```

## 参数
无

## 返回值

| 类型 | 描述 |
|------|------|
| Date | 返回今天的日期对象 |

## 描述

`today` 方法用于获取当天的日期对象。它会:

1. 获取当前日期
2. 清除时间部分（时、分、秒、毫秒）
3. 返回只包含日期部分的 Date 对象

这个方法常用于:
- 日期比较
- 日期范围计算
- 默认日期设置

## 示例

```javascript
// 获取今天的日期
const today = cx.date.today();
console.log(today); // 输出今天的日期，时间部分为 00:00:00

// 用于日期比较
const someDate = new Date('2024-01-15');
if (cx.date.compare(someDate, today) < 0) {
    console.log('这是一个过去的日期');
}

// 计算日期范围
function getLastWeekRange() {
    const end = cx.date.today();
    const start = cx.date.addDays(end, -7);
    return { start, end };
}

// 设置默认日期
const form = {
    startDate: cx.date.today(),
    endDate: cx.date.addDays(cx.date.today(), 30)
};

// 检查是否过期
function isExpired(date) {
    return cx.date.compare(date, cx.date.today()) < 0;
}

// 获取今天到月底的剩余天数
function getDaysLeftInMonth() {
    const today = cx.date.today();
    const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
    return cx.date.diffDays(nextMonth, today);
}
``` 