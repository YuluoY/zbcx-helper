# getFldvalue

根据表名，字段名、字段值取字段取值信息。

## 语法

```js
fields.getFldvalue(tabname, colname, dbValue)
```

## 参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| tabname | String | 表名 |
| colname | String | 字段名 |
| dbValue | * | 字段值 |

## 返回值

**类型:** Object | Null

返回字段取值信息对象。

## 示例

```js
// 创建Fields实例并初始化
const fields = new cx.Fields({
  fld: [
    { tabname: 'user', colname: 'status', title: '状态', type: 'number' }
  ],
  fldvalue: [
    { tabname: 'user', colname: 'status', value: 1, text: '启用' },
    { tabname: 'user', colname: 'status', value: 0, text: '禁用' }
  ]
});

// 获取user表中status字段的值对象
const statusValue = fields.getFldvalue('user', 'status');
console.log(statusValue);
// 输出: { tabname: 'user', colname: 'status', value: 1, text: '启用' }
```