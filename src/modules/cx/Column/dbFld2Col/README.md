# dbFld2Col

数据库fld转为colnum对象

## 方法签名
```typescript
static dbFld2Col(fld: Number) => {Object}
```

## 参数说明
- `fld` (Number): fld表中数据对象

## 返回值
- 类型：`Object`
- 说明：column对象

## 功能描述
将数据库中的fld字段转换为column对象。

## 示例
```typescript
const columnObj = cx.column.dbFld2Col(fldData);
``` 