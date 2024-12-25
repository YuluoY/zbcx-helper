# DataGrid

cx.datagrid 类 - datagrid辅助类

## 类描述
DataGrid类提供了一系列用于处理数据表格的静态方法，包括列信息的生成、编辑、操作等功能。

## 构造函数
```typescript
new DataGrid()
```

## 静态方法

### getCol
产生DataGrid列信息。[详细信息](./getCol/README.md)

### getDefCols
取得默认的列信息。[详细信息](./getDefCols/README.md)

### getDefCols2
取得默认的列信息。[详细信息](./getDefCols2/README.md)

### getEditVal
根据可编辑列信息，取可编辑列的字段值。[详细信息](./getEditVal/README.md)

### getOper
产生DataGrid操作信息。[详细信息](./getOper/README.md)

### getOperCol
产生DataGrid操作列信息。[详细信息](./getOperCol/README.md)

### isEditable
判断一列是否可编辑。[详细信息](./isEditable/README.md)

### makeCols
产生列信息。[详细信息](./makeCols/README.md)

### makeColsFitWidth
根据列名和列数据计算各列的宽，返回一个新的cols。[详细信息](./makeColsFitWidth/README.md)

## 示例
```typescript
// 创建列信息
const col = cx.datagrid.getCol('name', '姓名', 100);

// 获取默认列信息
const cols = cx.datagrid.getDefCols(['name', 'age', 'gender']);

// 创建操作列
const operCol = cx.datagrid.getOperCol('operation', '操作', 100);

// 自动调整列宽
const newCols = cx.datagrid.makeColsFitWidth(cols, data);
``` 