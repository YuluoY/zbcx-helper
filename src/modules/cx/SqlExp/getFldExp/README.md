# getFldExp

根据一个字段获取SQL条件表达式。

## 语法

```javascript
static getFldExp(result, fld, aliasOpt) → {cx.SqlEx}
```

## 参数

- result: cx.SqlEx - SQL条件表达式
- fld: Object - 字段信息
  - colname: String - 字段名
  - isnum: String - 是否数值
  - type: String - 字段显示类型
  - disptype: String (可选) - 显示类型
  - mode: String - 字段模式
  - value1: String - range模式的第一个值
  - value2: String - range模式的第二个值
  - value: String - value模式的值
- alias: String (可选) - 联合查询的别名

## 返回值

- cx.SqlEx - SQL条件表达式

## 示例

```javascript
const fldExp = cx.sqlexp.getFldExp(result, fld, 'alias');
console.log('字段条件表达式:', fldExp);
```

## 注意事项

- 直接通过 `cx.sqlexp.getFldExp` 调用
- 用于根据字段信息生成SQL条件表达式 