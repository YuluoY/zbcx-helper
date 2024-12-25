# delFile

## 描述
删除文件

## 参数
- `params` (Object): 参数
  - `filename` (String): 文件名(格式: root:文件名, 如果没有指定root, 则默认指向临时文件夹)

## 返回
- `Promise`

## 示例
```javascript
const params = { filename: 'data:ttt/1.zip' };
cx.svr.file.delFile(params).then(() => console.log('文件删除成功')).catch(err => console.error('删除失败', err));
``` 