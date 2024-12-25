# pointCheck

孤立点检查

## 方法签名
```typescript
static pointCheck(major: Number, minor: Number) => Promise
```

## 参数说明
- `major` (Number): 点实体主类型
- `minor` (Number): 点实体子类型

## 返回值
Promise 对象，返回sheet页数据序列，结构 {ret: 0, data: []}

## 功能描述
检查指定类型的点实体是否存在孤立点。

## 示例
```typescript
await cx.svr.network.pointCheck(1, 1);
``` 