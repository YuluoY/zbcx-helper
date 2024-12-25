# movePoint

移动点，同时移动拓扑线

## 方法签名
```typescript
static movePoint(major: Number, minor: Number, id: Number, params: Object) => Promise
```

## 参数说明
- `major` (Number): 点实体主类型
- `minor` (Number): 点实体子类型
- `id` (Number): 点实体id
- `params` (Object): 参数
  - `x` (Number): 新x坐标
  - `y` (Number): 新y坐标

## 返回值
Promise 对象，返回sheet页数据序列，结构 {ret: 0, data: []}

## 功能描述
移动指定的点实体到新的坐标位置，并同时移动相关的拓扑线。

## 示例
```typescript
await cx.svr.network.movePoint(1, 1, 123, { x: 100, y: 200 });
``` 