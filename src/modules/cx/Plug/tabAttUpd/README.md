# tabAttUpd

修改属性 - 基于表格模式（IDataMan/IDataMan2）。

## 语法

```javascript
static tabAttUpd(params: Object)
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
// 修改表格属性
cx.plug.tabAttUpd({
  context: dataManInstance,
  att: currentRow
});
```

## 注意事项

- 需要提供正确的DataMan实例
- 当前行必须是有效的数据行
- 修改操作会同步更新表格数据
- 修改成功后会自动刷新表格显示
- 确保修改的数据符合表格的数据规则 