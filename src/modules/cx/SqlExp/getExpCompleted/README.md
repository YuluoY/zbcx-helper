# getExpCompleted

默认条件表达式(completed=1 ORDER BY id DESC)。

## 语法

```javascript
static getExpCompleted() → {cx.SqlEx}
```

## 返回值

- cx.SqlEx - 默认的SQL条件表达式

## 示例

```javascript
// 获取已完成的条件表达式
const completedExp = cx.sqlexp.getExpCompleted();
console.log('已完成的条件表达式:', completedExp);
```

## 注意事项

- 直接通过 `cx.sqlexp.getExpCompleted` 调用
- 用于获取已完成状态的默认SQL条件表达式 