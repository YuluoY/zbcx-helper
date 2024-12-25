# getDefCols

取得默认的列信息

## 方法签名
```typescript
static getDefCols(flds: Array, sortable?: Boolean, align?: Number) => Array.<Object>
```

## 参数说明
- `flds` (Array): 字段信息列表
- `sortable` (Boolean, optional): 表格中字段列是否可以排序, 默认值: false
- `align` (Number, optional): 表格中字段列对齐方式, 默认值: cx.consts.ALIGN_CENTER

## 返回值
Array.<Object> - 构造好的列对象序列

## 功能描述
取得默认的列信息。

## 示例
```typescript
const cols = cx.datagrid.getDefCols(['name', 'age', 'gender'], true, cx.consts.ALIGN_CENTER);
``` 