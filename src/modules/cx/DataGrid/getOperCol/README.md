# getOperCol

产生DataGrid操作列信息

## 方法签名
```typescript
static getOperCol(colname: String, title: String, width: Number, align?: String) => Object
```

## 参数说明
- `colname` (String): 列名
- `title` (String): 显示标题
- `width` (Number): 列宽度
- `align` (String, optional): 对齐方式(ALIGN_LEFT, ALIGN_CENTER, ALIGN_RIGHT), 默认值: cx.consts.ALIGN_CENTER

## 返回值
Object - 操作列信息对象

## 功能描述
产生DataGrid操作列信息。

## 示例
```typescript
const operCol = cx.datagrid.getOperCol('operation', '操作', 100, cx.consts.ALIGN_CENTER);
``` 