# postGrpc

获取点的拓扑线

## 方法签名
```typescript
static postGrpc(params: Object) => Promise
```

## 参数说明
- `params` (Object): 参数
  - `cmd` (String, optional): 命令参数
  - `data` (String, optional): 数据对象

## 返回值
Promise 对象，返回sheet页数据序列，结构 {ret: 0, data: []}

## 功能描述
通过GRPC服务获取点的拓扑线数据。

## 示例
```typescript
await cx.svr.grpc.postGrpc({ 
  cmd: 'getTopology',
  data: JSON.stringify({ pointId: '123' })
});
``` 