# rename

## 描述
更改目录、文件名

## 参数
- `params` (Object): 参数
  - `filename` (String): 目录或文件的路径名(格式: root:文件名或者目录名, 如果没有指定root, 则默认指向临时文件夹)
  - `to` (String): 修改之后目录名/文件名(格式如: 'hr1.html', 'process1')

## 返回
- `Promise`

## 示例
```javascript
const params = { filename: 'data:ttt/1.zip', to: 'newname.zip' };
cx.svr.file.rename(params).then(() => console.log('重命名成功')).catch(err => console.error('重命名失败', err));
``` 