# queryPara

根据条件表达式对象生成查询对象。

## 语法

```javascript
static queryPara(sqlex, pageSizeOpt) → {Object}
```

## 参数

- sqlex: cx.SqlEx - 条件对象
- pageSize: Number (可选) - 分页大小(如果>0则分页, 否则不分页)

## 返回值

- Object - 返回用于 Data.query 的查询对象, 分页中init首次调用为0, 非第一次为1

## 示例

```javascript
const queryObject = cx.sqlexp.queryPara(sqlex, 10);
console.log('查询对象:', queryObject);
```

## 注意事项

- 直接通过 `cx.sqlexp.queryPara` 调用
- 用于生成查询对象, 支持分页 