# dirDel

删除文件目录（提示确认删除，删除文件目录，从目录树控件删除）。

## 语法

```javascript
static dirDel(params: Object)
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| params | Object | 参数对象 |
| params.context | Object | cx-tree 组件对象 |
| params.curNode | Object | 鼠标点击的当前结点（文件目录）|

## 返回值

无

## 示例

```javascript
// 删除文件目录
cx.plug.dirDel({
  context: treeComponent,  // cx-tree组件实例
  curNode: selectedNode    // 当前选中的树节点
});
```

## 注意事项

- 删除前会有确认提示
- 需要提供正确的cx-tree组件实例
- 当前节点必须是有效的目录节点
- 删除操作会同时删除目录下的所有内容
- 操作成功后会自动从树控件中移除该节点 