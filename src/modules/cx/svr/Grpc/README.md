# grpc

GRPC服务类

## 类名
cx.svr.grpc

## 功能说明
提供GRPC相关的服务，包括拓扑线数据获取等功能。

## 方法列表
| 方法名 | 说明 | 文档链接 |
|--------|------|----------|
| postGrpc | 获取点的拓扑线 | [查看详情](./postGrpc/README.md) |
| url | 取服务对应的网址 | [查看详情](./url/README.md) |

## 使用示例
```typescript
// 获取拓扑线数据
await cx.svr.grpc.postGrpc({ 
  cmd: 'getTopology',
  data: JSON.stringify({ pointId: '123' })
});

// 获取服务地址
const serviceUrl = cx.svr.grpc.url();
``` 