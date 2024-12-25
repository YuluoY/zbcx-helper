# copy

复制日期对象。

## 语法

```javascript
static copy(date)
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| date | Date | 要复制的日期对象 |

## 返回值

| 类型 | 描述 |
|------|------|
| Date | 返回新的日期对象 |

## 描述

`copy` 方法用于创建一个日期对象的副本。它会:

1. 创建一个新的日期对象
2. 将原日期对象的时间值复制到新对象
3. 返回这个新的日期对象

这个方法常用于:
- 避免修改原始日期
- 创建日期快照
- 日期对象的深拷贝

## 示例

```javascript
// 基本使用
const originalDate = new Date('2024-01-01');
const copiedDate = cx.date.copy(originalDate);
console.log(copiedDate); // 输出: 2024-01-01

// 验证是新对象
console.log(originalDate === copiedDate); // 输出: false

// 修改副本不影响原始日期
copiedDate.setDate(copiedDate.getDate() + 1);
console.log(originalDate); // 仍然是 2024-01-01
console.log(copiedDate); // 变成 2024-01-02

// 在日期计算中使用
const baseDate = new Date('2024-01-01');
const dates = [0, 1, 2, 3].map(days => {
    const date = cx.date.copy(baseDate);
    date.setDate(date.getDate() + days);
    return date;
});
console.log(dates); // 输出连续4天的日期
```