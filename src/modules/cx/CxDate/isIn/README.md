# isIn

判断日期是否在指定范围内。

## 语法

```javascript
static isIn(_date, date1, date2)
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| _date | Date | 要判断的日期对象 |
| date1 | Date | 基准日期对象A |
| date2 | Date | 基准日期对象B |

## 返回值

| 类型 | 描述 |
|------|------|
| Boolean | 如果日期在指定范围内返回 true，否则返回 false |

## 描述

`isIn` 方法用于判断一个日期是否在两个日期之间。它会:

1. 比较目标日期与两个基准日期
2. 判断目标日期是否在这个范围内（包含边界）
3. 基准日期的先后顺序不影响判断结果

这个方法常用于:
- 日期范围验证
- 有效期检查
- 时间段筛选

## 示例

```javascript
// 创建测试日期
const start = new Date('2024-01-01');
const end = new Date('2024-12-31');
const testDate = new Date('2024-06-15');

// 判断日期是否在范围内
console.log(cx.date.isIn(testDate, start, end)); // true

// 边界值测试
console.log(cx.date.isIn(start, start, end)); // true
console.log(cx.date.isIn(end, start, end)); // true

// 范围外测试
const outOfRange = new Date('2025-01-01');
console.log(cx.date.isIn(outOfRange, start, end)); // false

// 在表单验证中使用
function validateEventDate(eventDate) {
    const today = new Date();
    const nextYear = cx.date.addDays(today, 365);
    
    if (!cx.date.isIn(eventDate, today, nextYear)) {
        throw new Error('活动日期必须在一年内');
    }
    return true;
}
``` 