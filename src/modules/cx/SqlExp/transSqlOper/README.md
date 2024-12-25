# transSqlOper

SQL操作符转义。

## 语法

```javascript
static transSqlOper(sqlOper) → {Number}
```

## 参数

- sqlOper: String - SQL的操作符, 如 =, !=, >, <, like, in, is null, is not null 等

## 返回值

- Number - 转义后的值

## 示例

```javascript
const operValue = cx.sqlexp.transSqlOper('=');
console.log('操作符转义值:', operValue);
```

## 注意事项

- 直接通过 `cx.sqlexp.transSqlOper` 调用
- 用于将SQL操作符转义为数值 