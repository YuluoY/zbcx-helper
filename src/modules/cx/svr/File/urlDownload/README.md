# urlDownload

## 描述
获取下载文件的URL

## 参数
- `params` (Object): 参数
  - `filename` (String): 文件名，多个文件名之间用,分隔(格式: root:文件名, 如果没有指定root, 则默认指向临时文件夹)
  - `saveas` (String, optional): 下载后另存的文件名（默认用文件名）

## 返回
- `String`: 下载URL

## 示例
```javascript
const params = { filename: 'data:ttt/1.zip,ttt/2.zip', saveas: 'download.zip' };
const downloadUrl = cx.svr.file.urlDownload(params);
console.log('下载URL:', downloadUrl);
``` 