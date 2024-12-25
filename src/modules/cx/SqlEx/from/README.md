# from

通过数据构造SQL条件表达式。

## 语法

```javascript
from(sqlCons, orderby)
```

## 参数

- sqlCons: Array - SQL条件，格式: [[列,操作符,值,连接符], ...]
- orderby: String - 排序信息

## 返回值

无

## 示例

```javascript
// 创建SqlEx实例
const sqlEx = new cx.SqlEx();

// 构造SQL条件表达式
sqlEx.from([
  ['column1', '=', 'value1'],
  ['column2', '>', 'value2', 'AND']
], 'column1 ASC');
```

## 注意事项

- 需要通过 `new cx.SqlEx()` 实例化后调用
- 用于批量构建SQL条件和排序表达式 