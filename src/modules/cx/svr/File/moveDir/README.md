# moveDir

## 描述
移动目录(把目录下的子目录、文件全部移动到另一个目录下)

## 参数
- `params` (Object): 参数
  - `dir` (String): 待移动的目录(格式如: 'process/', 相当于 'DocSvr目录/process/')
  - `to` (String): 目标目录(格式如: 'process1/', 相当于 'DocSvr目录/process1/')

## 返回
- `Promise`

## 示例
```javascript
const params = { dir: 'process/', to: 'process1/' };
cx.svr.file.moveDir(params).then(() => console.log('目录移动成功')).catch(err => console.error('移动失败', err));
``` 