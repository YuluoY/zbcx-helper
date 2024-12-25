# isDate

判断是否为日期对象。

## 语法

```javascript
static isDate(date)
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| date | * | 待判断的对象 |

## 返回值

| 类型 | 描述 |
|------|------|
| Boolean | 如果是日期对象返回 true，否则返回 false |

## 描述

`isDate` 方法用于判断一个对象是否为有效的日期对象。它会:

1. 检查传入的参数是否为 Date 类型的实例
2. 验证日期值是否有效（不是 Invalid Date）

这个方法常用于:
- 参数验证
- 日期处理前的类型检查
- 表单输入验证

## 示例

```javascript
// 判断有效日期
const date = new Date();
console.log(cx.date.isDate(date)); // true

// 判断无效日期
console.log(cx.date.isDate('2024-01-01')); // false
console.log(cx.date.isDate(null)); // false
console.log(cx.date.isDate(undefined)); // false
console.log(cx.date.isDate(123)); // false

// 在函数中使用
function processDate(date) {
    if (!cx.date.isDate(date)) {
        throw new Error('参数必须是日期对象');
    }
    // 处理日期...
}
``` 