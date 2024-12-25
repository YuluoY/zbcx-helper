# treeId

给树状结构的对象增加ID

## 方法签名
```typescript
static treeId(plugTree: Array, startId: Number = 1)
```

## 参数说明
- `plugTree` (Array): 配置插件（构造成菜单树结构）
- `startId` (Number, 默认值: 1): 起始ID

## 功能描述
给树状结构的对象增加ID。

## 示例
```typescript
// 给树结构添加ID
cx.dc.Plug.treeId(pluginTreeData);

// 指定起始ID
cx.dc.Plug.treeId(pluginTreeData, 100);
``` 