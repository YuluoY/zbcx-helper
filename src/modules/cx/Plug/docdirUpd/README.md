# docdirUpd

修改文档目录（调用输入框输入目录名，修改文档目录，把修改结果同步到目录树控件）。

## 语法

```javascript
static docdirUpd(params: Object)
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
// 修改文档目录
cx.plug.docdirUpd({
  context: treeComponent,  // cx-tree组件实例
  curNode: selectedNode    // 当前选中的树节点
});
```

## 注意事项

- 需要提供正确的cx-tree组件实例
- 当前节点必须是有效的目录节点
- 会弹出输入框让用户输入新的目录名
- 不能修改为已存在的目录名
- 操作成功后会自动更新树控件显示