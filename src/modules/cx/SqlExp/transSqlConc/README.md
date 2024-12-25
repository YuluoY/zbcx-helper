# transSqlConc

SQL的连接符转义。

## 语法

```javascript
static transSqlConc(sqlCon) → {Number}
```

## 参数

- sqlCon: String - SQL的连接符, 如 and, or, filter, should, must

## 返回值

- Number - 转义后的值

## 示例

```javascript
const concValue = cx.sqlexp.transSqlConc('and');
console.log('连接符转义值:', concValue);
```

## 注意事项

- 直接通过 `cx.sqlexp.transSqlConc` 调用
- 用于将SQL连接符转义为数值 