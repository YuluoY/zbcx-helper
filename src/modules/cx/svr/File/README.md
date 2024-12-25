# file

文件操作服务类

## 类名
cx.svr.file

## 功能说明
提供对文件和目录的基本操作服务，包括复制、移动、删除、下载、转换等功能。

## 方法列表
| 方法名 | 说明 | 文档链接 |
|--------|------|----------|
| copyDir | 拷贝目录 | [查看详情](./copyDir/README.md) |
| copyFile | 拷贝文件 | [查看详情](./copyFile/README.md) |
| createDir | 创建目录 | [查看详情](./createDir/README.md) |
| delDir | 删除目录 | [查看详情](./delDir/README.md) |
| delFile | 删除文件 | [查看详情](./delFile/README.md) |
| download | 下载文件 | [查看详情](./download/README.md) |
| getDirFiles | 获取目录文件 | [查看详情](./getDirFiles/README.md) |
| getDirs | 获取目录 | [查看详情](./getDirs/README.md) |
| getFiles | 获取文件 | [查看详情](./getFiles/README.md) |
| htmlToWord | HTML转Word | [查看详情](./htmlToWord/README.md) |
| moveDir | 移动目录 | [查看详情](./moveDir/README.md) |
| moveFile | 移动文件 | [查看详情](./moveFile/README.md) |
| rename | 重命名 | [查看详情](./rename/README.md) |
| stream | 文件输出 | [查看详情](./stream/README.md) |
| toPdf | 文档转PDF | [查看详情](./toPdf/README.md) |
| url | 获取POST服务URL | [查看详情](./url/README.md) |
| urlDownload | 获取下载文件URL | [查看详情](./urlDownload/README.md) |
| urlGet | 获取GET服务URL | [查看详情](./urlGet/README.md) |
| urlStream | 获取文件流输出URL | [查看详情](./urlStream/README.md) |

## 使用示例
```javascript
// 复制目录
await cx.svr.file.copyDir({ dir: 'process/', to: 'process1/' });

// 复制文件
await cx.svr.file.copyFile({ filename: 'data:ttt/1.zip', to: 'process/leave1/hr1.html' });

// 创建目录
await cx.svr.file.createDir({ dir: 'data:ttt/' });

// 删除目录
await cx.svr.file.delDir({ dir: 'data:ttt/' });

// 删除文件
await cx.svr.file.delFile({ filename: 'data:ttt/1.zip' });

// 下载文件
await cx.svr.file.download({ filename: 'data:ttt/1.zip,ttt/2.zip', saveas: 'hr.html' });

// 获取目录文件
await cx.svr.file.getDirFiles({ dir: 'data:ttt/', types: 'docx' });

// 获取目录
await cx.svr.file.getDirs({ dir: 'data:ttt/', lazy: 0 });

// 获取文件
await cx.svr.file.getFiles({ dir: 'data:ttt/', types: '*' });

// HTML转Word
await cx.svr.file.htmlToWord({ html: '<h1>标题</h1>', saveas: 'output.docx' });

// 移动目录
await cx.svr.file.moveDir({ dir: 'process/', to: 'process1/' });

// 移动文件
await cx.svr.file.moveFile({ filename: 'data:ttt/1.zip', to: 'process/leave1/hr1.html' });

// 重命名
await cx.svr.file.rename({ filename: 'data:ttt/1.zip', to: 'newname.zip' });

// 文件流输出
await cx.svr.file.stream({ filename: 'data:ttt/1.zip' });
``` 