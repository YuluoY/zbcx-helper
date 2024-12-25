# createDir

## 描述
创建目录

## 参数
- `params` (Object): 参数
  - `dir` (String): 目录(格式: root:目录, 如果没有指定root, 则默认指向临时文件夹)

## 返回
- `Promise`

## 示例
```javascript
const params = { dir: 'data:ttt/' };
cx.svr.file.createDir(params).then(() => console.log('目录创建成功')).catch(err => console.error('创建失败', err));
``` 