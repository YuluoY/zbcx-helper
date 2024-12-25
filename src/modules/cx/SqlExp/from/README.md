# from

通过数据构造SQL条件表达式。

## 语法

```javascript
static from(sqlCons, orderby) → {cx.SqlEx}
```

## 参数

- sqlCons: Array - SQL条件，格式: [[列,操作符,值,连接符], ...]
- orderby: String - 排序信息

## 返回值

- cx.SqlEx - 构造的SQL条件表达式对象

## 示例

```javascript
// 构造SQL条件表达式
const sqlExp = cx.sqlexp.from([
  ['column1', '=', 'value1'],
  ['column2', '>', 'value2', 'AND']
], 'column1 ASC');
console.log('SQL条件表达式:', sqlExp);
```

## 注意事项

- 直接通过 `cx.sqlexp.from` 调用
- 用于批量构建SQL条件和排序表达式 