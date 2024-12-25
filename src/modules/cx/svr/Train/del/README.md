# del

删除培训文档

## 方法签名
```typescript
static del(params: Object)
```

## 参数说明
- `params` (Object): 参数
  - `id` (Number): ID
  - `path` (String): 父目录
  - `dir` (String): 本文档的目录
  - `retAtt` (Number, optional): 是否返回数据，默认值：0

## 返回值
Promise 对象，返回请求对象

## 功能描述
删除指定的培训文档。

## 示例
```typescript
await cx.svr.train.del({
  id: 123,
  path: "training/docs",
  dir: "course1",
  retAtt: 1
});
``` 