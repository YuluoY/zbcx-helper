# getFld

根据表名、字段名取字段信息。

## 语法

```js
fields.getFld(tabname, colname)
```

## 参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| tabname | String | 表名 |
| colname | String | 字段名 |

## 返回值

**类型:** Object

返回字段信息对象。

## 示例

```js
// 创建Fields实例并初始化
const fields = new cx.Fields({
  fld: [
    { tabname: 'user', colname: 'name', title: '姓名', type: 'string' },
    { tabname: 'user', colname: 'age', title: '年龄', type: 'number' }
  ],
  fldvalue: []
});

// 获取user表中name字段的信息
const nameField = fields.getFld('user', 'name');
console.log(nameField);
// 输出: { tabname: 'user', colname: 'name', title: '姓名', type: 'string' }
```