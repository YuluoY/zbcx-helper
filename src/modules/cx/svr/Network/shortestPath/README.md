# shortestPath

获取两点间的最短距离

## 方法签名
```typescript
static shortestPath(opts: Object) => Promise
```

## 参数说明
- `opts` (Object): 起始点实体
  - `major` (Number): 点图形表主类型
  - `minor` (Number): 点图形表子类型
  - `pnt1` (Number): 第一个点id
  - `pnt2` (Number): 第二个点id
  - `retAtt` (Number, optional): 是否返回属性记录，0-不返回，1-返回，默认值：0

## 返回值
Promise 对象，返回sheet页数据序列，结构 {ret: 0, data: []}

## 功能描述
计算并返回两个指定点之间的最短路径距离。

## 示例
```typescript
await cx.svr.network.shortestPath({ major: 1, minor: 1, pnt1: 123, pnt2: 124, retAtt: 1 });
``` 