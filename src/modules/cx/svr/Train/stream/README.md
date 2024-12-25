# stream

把文件输出到流

## 方法签名
```typescript
static stream(params: Object)
```

## 参数说明
- `params` (Object): 参数
  - `filename` (String): 文件名(注意：培训文档不需要 root)

## 返回值
Promise 对象，返回请求对象

## 功能描述
将培训文档文件输出到数据流中。

## 示例
```typescript
await cx.svr.train.stream({
  filename: "training_doc.pdf"
});
``` 