# makeCols

产生列信息

## 方法签名
```typescript
static makeCols(cols: Array, colInfs: Array, flds: Array)
```

## 参数说明
- `cols` (Array): 列数组({title, colname, width, align = cx.consts.HORIZEN_CENTER, sortable = true})
- `colInfs` (Array): 列信息({[colname], width, align = consts.HORIZEN_CENTER, sortable = true})
- `flds` (Array): 字段信息(主要用于设置title)

## 功能描述
产生列信息。

## 示例
```typescript
cx.datagrid.makeCols(
  [{title: '姓名', colname: 'name', width: 100}],
  [{colname: 'name', width: 100}],
  ['name']
);
``` 