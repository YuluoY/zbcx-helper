# getFldvalues

根据表名，字段名取字段取值信息。

## 语法

```js
fields.getFldvalues(tabname[, colname])
```

## 参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| tabname | String | 表名 |
| colname | String | 可选。列名，没传值时返回空数组 |

## 返回值

**类型:** Array<Object>

返回字段取值信息对象序列。

## 示例

```js
// 创建Fields实例并初始化
const fields = new cx.Fields({
  fld: [
    { tabname: 'user', colname: 'status', title: '状态', type: 'number' },
    { tabname: 'user', colname: 'type', title: '类型', type: 'number' }
  ],
  fldvalue: [
    { tabname: 'user', colname: 'status', value: 1, text: '启用' },
    { tabname: 'user', colname: 'status', value: 0, text: '禁用' },
    { tabname: 'user', colname: 'type', value: 1, text: '管理员' },
    { tabname: 'user', colname: 'type', value: 2, text: '普通用户' }
  ]
});

// 获取user表所有字段的取值信息
const allValues = fields.getFldvalues('user');
console.log(allValues);
// 输出: [
//   { tabname: 'user', colname: 'status', value: 1, text: '启用' },
//   { tabname: 'user', colname: 'status', value: 0, text: '禁用' },
//   { tabname: 'user', colname: 'type', value: 1, text: '管理员' },
//   { tabname: 'user', colname: 'type', value: 2, text: '普通用户' }
// ]

// 获取user表status字段的取值信息
const statusValues = fields.getFldvalues('user', 'status');
console.log(statusValues);
// 输出: [
//   { tabname: 'user', colname: 'status', value: 1, text: '启用' },
//   { tabname: 'user', colname: 'status', value: 0, text: '禁用' }
// ]
```