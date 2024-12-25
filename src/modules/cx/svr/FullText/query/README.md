# query

全文检索查询

## 方法签名
```typescript
static query(params: Object) => Promise
```

## 参数说明
- `params` (Object): 参数
  - `index` (String): 索引名
  - `args` (Array): 全文检索条件数组集合, [[fld1,oper,val,mode]], fld1是查询字段, oper是操作符, mode查询模式
  - `type` (Number, optional): 查询类型, 1-elasticsearch, 2-solr, 默认值: 1
  - `pageno` (String, optional): 页码, 默认值: 1
  - `pagesize` (String, optional): 页数量, 默认值: 20

## 返回值
Promise 对象

## 功能描述
执行全文检索查询。支持多种查询模式：
- 精确查询 (也是模糊查询，查询条件不进行分词)
- 分词查询 (模糊查询，查询条件进行分词)
- 大于
- 大于等于
- 小于
- 小于等于
- 空间矩形查询
- 空间多边形查询
- 空间圆形查询

查询模式：
- filter: 必须匹配
- should: 选择性匹配
- must: 必须匹配(对字段进行算分)
- notMust: 必须不匹配

## 示例
```typescript
// 基本查询
await cx.svr.fullText.query({ 
  index: 'myIndex',
  args: [['title', '=', '测试文档', 'filter']],
  type: 1,
  pageno: '1',
  pagesize: '20'
});

// 空间查询示例
await cx.svr.fullText.query({
  index: 'locations',
  args: [['location', 'rect', 'minx,miny,maxx,maxy', 'filter']],
  type: 1
});

// 多边形查询
await cx.svr.fullText.query({
  index: 'locations',
  args: [['location', 'polygon', 'x1,y1,x2,y2,x3,y3,...,x1,y1', 'filter']],
  type: 1
});

// 圆形查询
await cx.svr.fullText.query({
  index: 'locations',
  args: [['location', 'circle', 'x,y,r', 'filter']],
  type: 1
});
``` 