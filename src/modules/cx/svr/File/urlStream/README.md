# urlStream

## 描述
取文件输出到流的URL

## 参数
- `params` (Object): 参数
  - `filename` (String): 文件名

## 返回
- `String`: 流输出URL

## 示例
```javascript
const params = { filename: 'data:ttt/1.zip' };
const streamUrl = cx.svr.file.urlStream(params);
console.log('流输出URL:', streamUrl);
``` 