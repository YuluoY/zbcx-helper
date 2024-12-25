# delDir

## 描述
删除目录

## 参数
- `params` (Object): 参数
  - `dir` (String): 目录(格式: root:目录, 如果没有指定root, 则默认指向临时文件夹)

## 返回
- `Promise`

## 示例
```javascript
const params = { dir: 'data:ttt/' };
cx.svr.file.delDir(params).then(() => console.log('目录删除成功')).catch(err => console.error('删除失败', err));
``` 