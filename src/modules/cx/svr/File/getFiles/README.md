# getFiles

## 描述
取指定目录下的所有文件及子目录下的文件

## 参数
- `params` (Object): 参数
  - `dir` (String): 目录(格式: root:目录, 如果没有指定root, 则默认指向临时文件夹)
  - `types` (String, optional): 文件类型(如 '*', 'docx', 'docx,doc')，不指定值默认全部文件

## 返回
- `Promise`

## 示例
```javascript
const params = { dir: 'data:ttt/', types: '*' };
cx.svr.file.getFiles(params).then(files => console.log('文件列表:', files)).catch(err => console.error('获取失败', err));
``` 