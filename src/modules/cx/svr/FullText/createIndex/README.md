# createIndex

添加Index

## 方法签名
```typescript
static createIndex(params: Object) => Promise
```

## 参数说明
- `params` (Object): 参数
  - `index` (String): 索引名
  - `type` (Number, optional): 查询类型, 1-elasticsearch, 2-solr, 默认值: 1
  - `dsl` (String, optional): dsl语法, 默认值: 'doc'

## 返回值
Promise 对象

## 功能描述
创建全文检索索引。

## 示例
```typescript
await cx.svr.fullText.createIndex({ 
  index: 'myIndex',
  type: 1,
  dsl: 'doc'
});
``` 