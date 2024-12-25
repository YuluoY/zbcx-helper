# parse

把字符串解析成日期格式。

## 语法

```javascript
static parse(str)
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| str | String | 日期字符串，支持格式: YYYY-MM-DD、MM/DD/YYYY、YYYY年MM月DD日 |

## 返回值

| 类型 | 描述 |
|------|------|
| Date | 解析后的日期对象 |

## 描述

`parse` 方法用于将日期字符串转换为日期对象。它支持多种常见的日期格式：

1. 标准格式：YYYY-MM-DD（如：2024-01-15）
2. 美式格式：MM/DD/YYYY（如：01/15/2024）
3. 中文格式：YYYY年MM月DD日（如：2024年01月15日）

这个方法常用于:
- 表单数据处理
- 日期字符串转换
- 日期输入解析

## 示例

```javascript
// 解析不同格式的日期字符串
console.log(cx.date.parse('2024-01-15')); // 标准格式
console.log(cx.date.parse('01/15/2024')); // 美式格式
console.log(cx.date.parse('2024年01月15日')); // 中文格式

// 在表单处理中使用
function handleDateSubmit(dateStr) {
    try {
        const date = cx.date.parse(dateStr);
        if (cx.date.isDate(date)) {
            // 处理有效日期...
            return date;
        }
    } catch (e) {
        throw new Error('日期格式无效');
    }
}

// 日期比较
const date1 = cx.date.parse('2024-01-15');
const date2 = cx.date.parse('2024/01/20');
console.log(cx.date.compare(date1, date2)); // -1

// 日期范围处理
function getDateRange(startStr, endStr) {
    return {
        start: cx.date.parse(startStr),
        end: cx.date.parse(endStr)
    };
}

const range = getDateRange('2024-01-01', '2024-12-31');
console.log(range);
``` 