# fullText

全文检索服务类

## 类名
cx.svr.fullText

## 功能说明
提供全文检索相关的服务，包括索引创建、文档管理和检索查询等功能。

## 方法列表
| 方法名 | 说明 | 文档链接 |
|--------|------|----------|
| addDoc | 添加document | [查看详情](./addDoc/README.md) |
| createIndex | 添加Index | [查看详情](./createIndex/README.md) |
| delDoc | 删除document | [查看详情](./delDoc/README.md) |
| query | 全文检索查询 | [查看详情](./query/README.md) |
| url | 取服务对应的网址 | [查看详情](./url/README.md) |

## 使用示例
```typescript
// 创建索引
await cx.svr.fullText.createIndex({ 
  index: 'myIndex',
  type: 1,
  dsl: 'doc'
});

// 添加文档
await cx.svr.fullText.addDoc({ 
  index: 'myIndex',
  mediaid: '123,124',
  type: 1
});

// 查询文档
await cx.svr.fullText.query({ 
  index: 'myIndex',
  args: [['title', '=', '测试文档', 'filter']],
  type: 1,
  pageno: '1',
  pagesize: '20'
});

// 删除文档
await cx.svr.fullText.delDoc({ 
  index: 'myIndex',
  mediaid: '123,124',
  type: 1
});

// 获取服务地址
const serviceUrl = cx.svr.fullText.url();