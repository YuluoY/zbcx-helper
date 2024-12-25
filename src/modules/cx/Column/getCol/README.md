# getCol

得到一个内存字段对象

## 方法签名
```typescript
static getCol(disporder: Number, colname: String, title: String, disptype: Number, isnum: Boolean, required: Boolean, strCfg?: String) => {Object}
```

## 参数说明
- `disporder` (Number): 显示顺序( < 1 不显示)
- `colname` (String): 列名
- `title` (String): 标题
- `disptype` (Number): 显示类型(cx.consts.DISP_*)
- `isnum` (Boolean): 是否数值型
- `required` (Boolean): 是否必填项
- `strCfg` (String, optional): 配置信息字符串(当类型为 VALBUTTON / SELDYNA 时的配置信息，如:"plugin:'SelRoad',field:mc,#{id1}:id")

## 返回值
- 类型：`Object`
- 说明：返回一个包含以下属性的对象：
  - `value` (String): 值
  - `editable` (Boolean): 是否可编辑
  - `rows` (Number): 行数
  - 其他属性...

## 功能描述
获取一个内存字段对象，根据传入的参数配置对象的属性。

## 示例
```typescript
const column = cx.column.getCol(1, 'name', '姓名', cx.consts.DISP_TEXT, false, true);
``` 