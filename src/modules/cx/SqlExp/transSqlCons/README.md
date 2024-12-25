# transSqlCons

获取SQL表达式元素的转义字符串。

## 语法

```javascript
static transSqlCons(sqlCons) → {String}
```

## 参数

- sqlCons: Array - 元子表达式, [列, 操作符, 值, 连接符]
  - 列: String - 字段列
  - 操作符: String - 如 =, !=, >, <, like, in, is null, is not null 等
  - 值: String - 值
  - 连接符: String|NULL - 与前元子连接符, 如 and, or, filter, should, must

## 返回值

- String - 解析后的表达式元子字符串

## 示例

```javascript
const consString = cx.sqlexp.transSqlCons(['id', '>', 0]);
console.log('转义后的表达式元子字符串:', consString);
```

## 注意事项

- 直接通过 `cx.sqlexp.transSqlCons` 调用
- 用于将SQL表达式元素转义为字符串 