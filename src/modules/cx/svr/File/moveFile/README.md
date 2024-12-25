# moveFile

## 描述
移动文件

## 参数
- `params` (Object): 参数
  - `filename` (String): 文件名(格式: root:文件名, 如果没有指定root, 则默认指向临时文件夹)
  - `to` (String): 目标文件名(格式如: 'process/leave1/hr1.html')

## 返回
- `Promise`

## 示例
```javascript
const params = { filename: 'data:ttt/1.zip', to: 'process/leave1/hr1.html' };
cx.svr.file.moveFile(params).then(() => console.log('文件移动成功')).catch(err => console.error('移动失败', err));
``` 