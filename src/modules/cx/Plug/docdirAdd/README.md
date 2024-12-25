# docdirAdd

增加文档目录（调用输入框输入目录名，增加文档目录，并把结果增加到树控件）。

## 语法

```javascript
static docdirAdd(params: Object)
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
// 增加文档目录
cx.plug.docdirAdd({
  context: treeComponent,  // cx-tree组件实例
  curNode: selectedNode    // 当前选中的树节点
});
```

## 注意事项

- 需要提供正确的cx-tree组件实例
- 当前节点必须是有效的目录节点
- 会弹出输入框让用户输入新目录名
- 目录名不能与已存在的目录重名
- 操作成功后会自动更新树控件显示 