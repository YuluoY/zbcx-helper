# doc

文档操作服务类

## 类名
cx.svr.doc

## 功能说明
提供对文档的基本操作服务，包括下载、生成预览、流输出等功能。

## 方法列表
| 方法名 | 说明 | 文档链接 |
|--------|------|----------|
| download | 下载文档原始文件 | [查看详情](./download/README.md) |
| downloadThumbnail | 下载文档缩略图 | [查看详情](./downloadThumbnail/README.md) |
| genPreview | 生成预览文件 | [查看详情](./genPreview/README.md) |
| genThumbnail | 生成缩略图 | [查看详情](./genThumbnail/README.md) |
| getMode | 获取文档存储模式 | [查看详情](./getMode/README.md) |
| saveTempFile | 将临时文件存入文档库 | [查看详情](./saveTempFile/README.md) |
| stream | 文档原始文件输出到流 | [查看详情](./stream/README.md) |
| streamPreview | 文档缩略图输出到流 | [查看详情](./streamPreview/README.md) |
| streamThumbnail | 文档缩略图输出到流 | [查看详情](./streamThumbnail/README.md) |
| streamThumbnailFile | 取文档缩略图输出到流的URL | [查看详情](./streamThumbnailFile/README.md) |
| unDel | 从回收站撤销删除 | [查看详情](./unDel/README.md) |
| upzip | 解压缩文件并在media表写入记录 | [查看详情](./upzip/README.md) |
| url | 取POST服务对应的URL | [查看详情](./url/README.md) |
| urlDownload | 取下载文档的URL | [查看详情](./urlDownload/README.md) |
| urlDownloadThumbnail | 取下载文档缩略图的URL | [查看详情](./urlDownloadThumbnail/README.md) |
| urlGet | 取GET服务对应的URL | [查看详情](./urlGet/README.md) |
| urlStream | 取文档输出到流的URL | [查看详情](./urlStream/README.md) |
| urlStreamPreview | 取文档预览文件输出到流的URL | [查看详情](./urlStreamPreview/README.md) |
| urlStreamThumbnail | 取文档缩略图输出到流的URL | [查看详情](./urlStreamThumbnail/README.md) |
| urlStreamThumbnailFile | 取文档缩略图输出到流的URL | [查看详情](./urlStreamThumbnailFile/README.md) |

## 使用示例
```typescript
// 下载文档
await cx.svr.doc.download({ id: '123' });

// 生成预览
await cx.svr.doc.genPreview({ id: 123 });

// 文档流输出
await cx.svr.doc.stream({ id: '123' });

// 获取存储模式
const mode = cx.svr.doc.getMode();

// URL获取
const url = cx.svr.doc.url();
``` 