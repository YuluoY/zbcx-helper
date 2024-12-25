# getTopAttGraph

获取点的拓扑线

## 方法签名
```typescript
static getTopAttGraph(major: Number, minor: Number, id: Number) => Promise
```

## 参数说明
- `major` (Number): 点实体主类型
- `minor` (Number): 点实体子类型
- `id` (Number): 点实体id

## 返回值
Promise 对象，返回sheet页数据序列，结构 {ret: 0, data: []}

## 功能描述
获取指定点实体的拓扑线信息。

## 示例
```typescript
await cx.svr.network.getTopAttGraph(1, 1, 123);
``` 