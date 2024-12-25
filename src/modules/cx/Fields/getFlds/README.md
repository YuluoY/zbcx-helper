# getFlds

根据表名取字段信息。

## 语法

```js
fields.getFlds(tabname)
```

## 参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| tabname | String | 可选。表名。如果提供,则只返回该表的字段 |

## 返回值

**类型:** Array<Object>

返回字段对象列表。每个字段对象包含字段的完整信息。

## 示例

```js
// 创建Fields实例并初始化
const fields = new cx.Fields({
  fld: [
    { tabname: 'user', colname: 'id', title: 'ID', type: 'number' },
    { tabname: 'user', colname: 'name', title: '姓名', type: 'string' },
    { tabname: 'order', colname: 'code', title: '订单编号', type: 'string' }
  ],
  fldvalue: []
});

// 获取所有字段列表
const allFields = fields.getFlds();
console.log(allFields);
// 输出: [
//   { tabname: 'user', colname: 'id', title: 'ID', type: 'number' },
//   { tabname: 'user', colname: 'name', title: '姓名', type: 'string' },
//   { tabname: 'order', colname: 'code', title: '订单编号', type: 'string' }
// ]

// 只获取user表的字段列表
const userFields = fields.getFlds('user');
console.log(userFields);
// 输出: [
//   { tabname: 'user', colname: 'id', title: 'ID', type: 'number' },
//   { tabname: 'user', colname: 'name', title: '姓名', type: 'string' }
// ]
```