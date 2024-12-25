# plugsCached

根据配置node取配置的插件(从缓存取)

## 方法签名
```typescript
static plugsCached(plugNodes: Array.String) => Promise
```

## 参数说明
- `plugNodes` (Array.String): 配置的节点数组

## 返回值
返回类型：Promise

## 功能描述
根据配置node取配置的插件(从缓存取)。

## 示例
```typescript
// 从缓存获取插件配置
const plugins = await cx.dc.Plug.plugsCached(['node1', 'node2', 'node3']);
``` 