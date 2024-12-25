# plugs

根据配置node取配置的插件(设置了缓存，从缓存取；没有设置缓存数据，从数据库取)

## 方法签名
```typescript
static plugs(plugNodes: Array.String) => Promise
```

## 参数说明
- `plugNodes` (Array.String): 配置的节点数组

## 返回值
返回类型：Promise

## 功能描述
根据配置node取配置的插件(设置了缓存，从缓存取；没有设置缓存数据，从数据库取)。

## 示例
```typescript
// 获取插件配置
const plugins = await cx.dc.Plug.plugs(['node1', 'node2', 'node3']);
``` 