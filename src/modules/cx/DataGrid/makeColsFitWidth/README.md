# makeColsFitWidth

根据列名和列数据计算各列的宽，返回一个新的cols

## 方法签名
```typescript
static makeColsFitWidth(cols: Array.<Object>, tabDatas: Array.<Object>, colMaxWidth?: Number, fontSize?: Number, padding?: Number) => Array.<Object>
```

## 参数说明
- `cols` (Array.<Object>): 列对象数组(支持已构造好的表cols)
  - `colname` (String): 列字段名
  - `title` (String): 列文本名
  - `sortable` (Boolean, optional): 该列是否可排序, 默认值: false
- `tabDatas` (Array.<Object>): 表格待展示数据
- `colMaxWidth` (Number, optional): 列的最大宽度, 默认值: 400
- `fontSize` (Number, optional): 字体大小, 默认值: 13
- `padding` (Number, optional): 内容左右边距和, 默认值: 21

## 返回值
Array.<Object> - 返回一个新的cols

## 功能描述
根据列名和列数据计算各列的宽，返回一个新的cols。

## 示例
```typescript
const newCols = cx.datagrid.makeColsFitWidth(
  [{colname: 'name', title: '姓名'}],
  [{name: 'John'}, {name: 'Alice'}],
  500,
  14,
  30
);
``` 