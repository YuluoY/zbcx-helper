# getDirFiles

## 描述
取指定目录下的文件夹，指定类型的文件 (不含子目录)

## 参数
- `params` (Object): 参数
  - `dir` (String): 目录(格式: root:目录, 如果没有指定root, 则默认指向临时文件夹)
  - `types` (String, optional): 文件类型(如 '*', 'docx', 'docx,doc')，不指定值默认全部文件

## 返回
- `Promise`

## 示例
```javascript
const params = { dir: 'data:ttt/', types: 'docx' };
cx.svr.file.getDirFiles(params).then(files => console.log('文件列表:', files)).catch(err => console.error('获取失败', err));
``` 