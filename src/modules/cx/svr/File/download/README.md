# download

## 描述
下载文件(支持多个压缩下载)

## 参数
- `params` (Object): 参数
  - `filename` (String): 文件名，多个文件名之间用,分隔(格式: root:文件名, 如果没有指定root, 则默认指向临时文件夹)
  - `saveas` (String, optional): 另存为(格式如: hr.html)

## 返回
- `Promise`

## 示例
```javascript
const params = { filename: 'data:ttt/1.zip,ttt/2.zip', saveas: 'hr.html' };
cx.svr.file.download(params).then(() => console.log('下载成功')).catch(err => console.error('下载失败', err));
``` 