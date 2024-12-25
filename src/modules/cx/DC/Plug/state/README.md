# state

根据当前的状态，确定菜单、工具条的状态

## 方法签名
```typescript
static state(plugTree: Array, values: Object, flds: Object, nodeName: String)
```

## 参数说明
- `plugTree` (Array): 配置插件（构造成菜单树结构）
- `values` (Object): 当前结点提供的数据
- `flds` (Object): 当前结点提供的信息
- `nodeName` (String): 当前选中的结点的名字

## 功能描述
根据当前的状态，确定菜单、工具条的状态。

## 示例
```typescript
// 确定菜单和工具条状态
cx.dc.Plug.state(
    pluginTreeData,
    { id: 1, status: 'active' },
    { name: 'node1', type: 'folder' },
    'selectedNode'
);
``` 