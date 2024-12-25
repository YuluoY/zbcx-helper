# getPublicValue

用public构造tabname表colname字段的fldvalue对象序列。

## 语法

```js
fields.getPublicValue(tabname, colname)
```

## 参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| tabname | String | 表名 |
| colname | String | 字段名 |

## 返回值

**类型:** Array

返回fldvalue对象序列。

## 示例

```js
// 创建Fields实例并初始化
const fields = new cx.Fields({
  fld: [
    { tabname: 'user', colname: 'gender', title: '性别', type: 'number' }
  ],
  fldvalue: []
});

// 获取user表中gender字段的公共值列表
const genderValues = fields.getPublicValue('user', 'gender');
console.log(genderValues);
// 输出: [
//   { tabname: 'user', colname: 'gender', value: 1, text: '男' },
//   { tabname: 'user', colname: 'gender', value: 2, text: '女' }
// ]
```