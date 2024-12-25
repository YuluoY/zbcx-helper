# getExpGlid

默认条件表达式(id0=? ORDER BY id DESC)。

## 语法

```javascript
static getExpGlid(id0) → {cx.SqlEx}
```

## 参数

- id0: Number - ID0

## 返回值

- cx.SqlEx - SQL条件表达式

## 示例

```javascript
const expGlid = cx.sqlexp.getExpGlid(123);
console.log('条件表达式:', expGlid);
```

## 注意事项

- 直接通过 `cx.sqlexp.getExpGlid` 调用
- 用于生成带有ID0条件的SQL表达式 