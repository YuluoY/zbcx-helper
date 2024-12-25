# getFldValsDb

根据表名，取fld和fldvalue数据，并缓存到该类对象。

## 语法

```js
fields.getFldValsDb(tabName, dbPrior)
```

## 参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| tabName | String | 表名 |
| dbPrior | Boolean | 可选。是否优先从数据库获取 |

## 返回值

**类型:** Promise<Object>

返回值包含以下属性:

| 属性名 | 类型 | 说明 |
|--------|------|------|
| fld | Array<Object> | 字段对象序列 |
| fldvalue | Array<Object> | 字段值对象序列 |