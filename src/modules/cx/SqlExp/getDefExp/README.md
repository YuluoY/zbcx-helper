# getDefExp

取默认的条件表达式。

## 语法

```javascript
static getDefExp() → {cx.SqlEx}
```

## 返回值

- cx.SqlEx - 默认的SQL条件表达式

## 示例

```javascript
// 获取默认条件表达式
const defExp = cx.sqlexp.getDefExp();
console.log('默认条件表达式:', defExp);
```

## 注意事项

- 直接通过 `cx.sqlexp.getDefExp` 调用
- 用于获取系统默认的SQL条件表达式 