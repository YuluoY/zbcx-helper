# getFld2

根据主类型，子类型，字段名取字段信息。

## 语法

```js
fields.getFld2(major, minor[, colname])
```

## 参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| major | Number | 主类型 |
| minor | Number | 子类型 |
| colname | String | 可选。列名，没传值时返回空数组 |

## 返回值

**类型:** Object

返回值包含以下属性：

| 属性名 | 类型 | 说明 |
|--------|------|------|
| fld | Array<Object> | 字段对象序列 |
| fldvalue | Array<Object> | 字段值对象序列 |

## 示例

```js
// 创建Fields实例并初始化
const fields = new cx.Fields({
  fld: [
    { major: 1, minor: 1, colname: 'code', title: '编码', type: 'string' },
    { major: 1, minor: 1, colname: 'name', title: '名称', type: 'string' },
    { major: 1, minor: 2, colname: 'address', title: '地址', type: 'string' }
  ],
  fldvalue: [
    { major: 1, minor: 1, colname: 'code', value: '001', text: '001' },
    { major: 1, minor: 1, colname: 'name', value: '张三', text: '张三' }
  ]
});

// 获取major=1, minor=1的所有字段信息
const allFields = fields.getFld2(1, 1);
console.log(allFields);
// 输出: {
//   fld: [
//     { major: 1, minor: 1, colname: 'code', title: '编码', type: 'string' },
//     { major: 1, minor: 1, colname: 'name', title: '名称', type: 'string' }
//   ],
//   fldvalue: [
//     { major: 1, minor: 1, colname: 'code', value: '001', text: '001' },
//     { major: 1, minor: 1, colname: 'name', value: '张三', text: '张三' }
//   ]
// }

// 获取major=1, minor=1, colname='code'的字段信息
const codeField = fields.getFld2(1, 1, 'code');
console.log(codeField);
// 输出: {
//   fld: [{ major: 1, minor: 1, colname: 'code', title: '编码', type: 'string' }],
//   fldvalue: [{ major: 1, minor: 1, colname: 'code', value: '001', text: '001' }]
// }
```
  </rewritten_file> 