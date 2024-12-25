# getExpUncompleted

默认条件表达式(completed=0 ORDER BY id DESC)。

## 语法

```javascript
static getExpUncompleted() → {cx.SqlEx}
```

## 返回值

- cx.SqlEx - SQL条件表达式

## 示例

```javascript
const expUncompleted = cx.sqlexp.getExpUncompleted();
console.log('条件表达式:', expUncompleted);
```

## 注意事项

- 直接通过 `cx.sqlexp.getExpUncompleted` 调用
- 用于生成未完成状态的SQL表达式 