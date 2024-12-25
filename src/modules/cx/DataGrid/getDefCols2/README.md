# getDefCols2

取得默认的列信息

## 方法签名
```typescript
static getDefCols2(flds: Array, tabCfg: Object) => Array.<Object>
```

## 参数说明
- `flds` (Array): 字段信息列表
- `tabCfg` (Object): 表格配置
  - `flds` (Array): 配置的字段信息
  - `disp` (Array): 默认显示列(,分隔)

## 返回值
Array.<Object> - 构造好的列对象序列

## 功能描述
取得默认的列信息。

## 示例
```typescript
const cols = cx.datagrid.getDefCols2(['name', 'age'], {
  flds: ['name', 'age', 'gender'],
  disp: ['name', 'age']
});
``` 