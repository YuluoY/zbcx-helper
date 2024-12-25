# getCol

产生DataGrid列信息

## 方法签名
```typescript
static getCol(colname: String, title: String, width: Number, align?: String, sortable?: Boolean) => Object
```

## 参数说明
- `colname` (String): 列名
- `title` (String): 显示标题
- `width` (Number): 列宽度
- `align` (String, optional): 对齐方式(ALIGN_LEFT, ALIGN_CENTER, ALIGN_RIGHT), 默认值: cx.consts.ALIGN_CENTER
- `sortable` (Boolean, optional): 是否可排序, 默认值: true

## 返回值
Object 对象

## 功能描述
产生DataGrid列信息。

## 示例
```typescript
const col = cx.datagrid.getCol('name', '姓名', 100, cx.consts.ALIGN_CENTER, true);
``` 