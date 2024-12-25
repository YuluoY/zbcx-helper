# getOptions

根据表名，字段名取字段取值，转换成 option 结构。

## 语法

```js
fields.getOptions(tabname[, colname])
```

## 参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| tabname | String | 表名 |
| colname | String | 可选。列名 |

## 返回值

**类型:** Array<Object>

返回选项对象列表。每个选项对象包含以下属性：
- value: String - 选项值
- label: String - 选项标签

## 示例

```js
// 创建Fields实例并初始化
const fields = new cx.Fields({
  fld: [
    { tabname: 'user', colname: 'status', title: '状态', type: 'number' }
  ],
  fldvalue: [
    { tabname: 'user', colname: 'status', value: 1, text: '启用', options: { color: 'green' } },
    { tabname: 'user', colname: 'status', value: 0, text: '禁用', options: { color: 'red' } }
  ]
});

// 获取user表status字段的选项列表
const options = fields.getOptions('user', 'status');
console.log(options);
// 输出: [
//   { value: 1, label: '启用', options: { color: 'green' } },
//   { value: 0, label: '禁用', options: { color: 'red' } }
// ]
```