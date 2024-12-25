# getEditVal

根据可编辑列信息，取可编辑列的字段值

## 方法签名
```typescript
static getEditVal(cols: Array.<Fld>, row: Object) => Object
```

## 参数说明
- `cols` (Array.<Fld>): Datagrid字段信息
- `row` (Object): Datagrid行数据

## 返回值
Object - 返回属性对象

## 功能描述
根据可编辑列信息，取可编辑列的字段值。

## 示例
```typescript
const editValue = cx.datagrid.getEditVal(gridColumns, rowData);
``` 