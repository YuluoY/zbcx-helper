# locFldval

取字段值的多语言值。

## 语法

```js
fields.locFldval(fldval)
```

## 参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| fldval | Object | 字段取值信息对象 |

## 返回值

**类型:** void

该方法会直接修改传入的字段值对象,将其多语言相关的属性值替换为当前语言环境下的值。

## 示例

```js
// 创建Fields实例并初始化
const fields = new cx.Fields({
  fld: [
    { tabname: 'user', colname: 'status', title: '状态', type: 'number' }
  ],
  fldvalue: [
    { tabname: 'user', colname: 'status', value: 1, text: '启用' },
    { tabname: 'user', colname: 'status', value: 0, text: '禁用', current: true }
  ]
});

// 定位当前字段值
const currentValue = fields.locFldval();
console.log(currentValue);
// 输出: { tabname: 'user', colname: 'status', value: 0, text: '禁用', current: true }
```