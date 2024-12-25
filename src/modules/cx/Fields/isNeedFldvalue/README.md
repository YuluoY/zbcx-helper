# isNeedFldvalue

判断字段是否需要fldvalue配置。

## 语法

```js
fields.isNeedFldvalue(disptype)
```

## 参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| disptype | Number | 字段的显示类型 |

## 返回值

**类型:** Boolean

返回判断结果：
- true - 需要fldvalue配置
- false - 不需要fldvalue配置

## 示例

```js
// 创建Fields实例并初始化
const fields = new cx.Fields({
  fld: [
    { tabname: 'user', colname: 'status', title: '状态', type: 'number', disptype: 1 },
    { tabname: 'user', colname: 'name', title: '姓名', type: 'string', disptype: 2 }
  ],
  fldvalue: []
});

// 判断字段是否需要fldvalue配置
const needFldvalue1 = fields.isNeedFldvalue(1);
console.log(needFldvalue1); // true

const needFldvalue2 = fields.isNeedFldvalue(2);
console.log(needFldvalue2); // false