# getColEx

根据一个字段、值、SQL操作符获取SQL条件表达式信息。

## 语法

```javascript
static getColEx(fld, operator, value, conc?, alias?) → {cx.SqlColEx}
```

## 参数

- fld: Object - 字段信息
  - colname: String - 字段名
- operator: String - 操作符
- value: String - 值
- conc?: String - 连接符
- alias?: String - 联合查询的别名

## 返回值

- cx.SqlColEx - 条件表达式式-列

## 示例

```javascript
// 获取SQL条件表达式信息
const colEx = cx.sqlexp.getColEx({ colname: 'age' }, '>', '30');
console.log('条件表达式信息:', colEx);
```

## 注意事项

- 直接通过 `cx.sqlexp.getColEx` 调用
- 用于生成单个字段的SQL条件表达式 