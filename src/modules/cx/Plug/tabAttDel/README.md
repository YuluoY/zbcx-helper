# tabAttDel

删除属性 - 基于表格模式（IDataMan/IDataMan2）。

## 语法

```javascript
static tabAttDel(params: Object)
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| params | Object | 参数对象 |
| params.context | Object | DataMan(2) 对象 |
| params.att | Object | 鼠标点击的当前行 |

## 返回值

无

## 示例

```javascript
// 删除表格属性
cx.plug.tabAttDel({
  context: dataManInstance,
  att: currentRow
});
```

## 注意事项

- 需要提供正确的DataMan实例
- 当前行必须是有效的数据行
- 删除前会有确认提示
- 删除操作不可逆，请谨慎操作
- 删除成功后会自动刷新表格 