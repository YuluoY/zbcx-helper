# getExpDef

默认条件表达式(id>0 ORDER BY id DESC)。

## 语法

```javascript
static getExpDef() → {cx.SqlEx}
```

## 返回值

- cx.SqlEx - 默认的SQL条件表达式

## 示例

```javascript
// 获取默认条件表达式
const expDef = cx.sqlexp.getExpDef();
console.log('默认条件表达式:', expDef);
```

## 注意事项

- 直接通过 `cx.sqlexp.getExpDef` 调用
- 用于获取默认的SQL条件表达式 