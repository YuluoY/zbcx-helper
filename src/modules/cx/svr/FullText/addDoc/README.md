# addDoc

添加document

## 方法签名
```typescript
static addDoc(params: Object) => Promise
```

## 参数说明
- `params` (Object): 参数
  - `index` (String): 索引名
  - `mediaid` (String): media表对应记录id, 多个使用逗号隔开
  - `type` (Number, optional): 查询类型, 1-elasticsearch, 2-solr, 默认值: 1

## 返回值
Promise 对象

## 功能描述
添加document到全文检索服务。

## 示例
```typescript
await cx.svr.fullText.addDoc({ 
  index: 'myIndex',
  mediaid: '123,124',
  type: 1
});
``` 