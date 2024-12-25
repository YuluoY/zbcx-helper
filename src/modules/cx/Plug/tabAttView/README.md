# tabAttView

浏览属性 - 基于表格模式（IDataMan/IDataMan2）。

## 语法

```javascript
static tabAttView(params: Object)
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
// 浏览表格属性
cx.plug.tabAttView({
  context: dataManInstance,
  att: currentRow
});
```

## 注意事项

- 需要提供正确的DataMan实例
- 当前行必须是有效的数据行
- 浏览模式下不能修改数据
- 用于查看行数据的详细信息
- 支持表格数据的格式化显示 