# getDirs

## 描述
取指定目录下的所有目录及子目录

## 参数
- `params` (Object): 参数
  - `dir` (String): 目录(格式: root:目录, 如果没有指定root, 则默认指向临时文件夹)
  - `lazy` (Number, optional): 0 / 不设置 - 递归加载; 1 - 只取目录下的文件和文件夹

## 返回
- `Promise`

## 示例
```javascript
const params = { dir: 'data:ttt/', lazy: 0 };
cx.svr.file.getDirs(params).then(dirs => console.log('目录列表:', dirs)).catch(err => console.error('获取失败', err));
``` 