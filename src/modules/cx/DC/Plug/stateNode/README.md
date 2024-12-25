# stateNode

根据当前的状态，确定菜单、工具条的状态

## 方法签名
```typescript
static stateNode(plug: Object, values: Object, flds: Object, nodeName: String)
```

## 参数说明
- `plug` (Object): 插件
- `values` (Object): 当前结点提供的数据
- `flds` (Object): 当前结点提供的信息
- `nodeName` (String): 当前选中的结点的名字

## 功能描述
根据当前的状态，确定菜单、工具条的状态。

## 示例
```typescript
// 确定节点状态
cx.dc.Plug.stateNode(
    pluginObject,
    { id: 1, status: 'active' },
    { name: 'node1', type: 'folder' },
    'selectedNode'
);
``` 