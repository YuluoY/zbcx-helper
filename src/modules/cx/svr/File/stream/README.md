# stream

## 描述
把文件输出到流

## 参数
- `params` (Object): 参数
  - `filename` (String): 文件名(格式: root:文件名, 如果没有指定root, 则默认指向临时文件夹)

## 返回
- `Promise`

## 示例
```javascript
const params = { filename: 'data:ttt/1.zip' };
cx.svr.file.stream(params).then(() => console.log('文件流输出成功')).catch(err => console.error('输出失败', err));
``` 