# delPoint

删除点，同时删除拓扑线

## 方法签名
```typescript
static delPoint(major: Number, minor: Number, id: Number) => Promise
```

## 参数说明
- `major` (Number): 点实体主类型
- `minor` (Number): 点实体子类型
- `id` (Number): 点实体id

## 返回值
Promise 对象，返回sheet页数据序列，结构 {ret: 0, data: []}

## 功能描述
删除指定的点实体，并同时删除与之相关的拓扑线。

## 示例
```typescript
await cx.svr.network.delPoint(1, 1, 123);
``` 