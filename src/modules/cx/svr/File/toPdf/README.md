# toPdf

## 描述
文档转 pdf

## 参数
- `params` (Object): 参数
  - `filename` (String): 文件名 (格式: root:文件名)
  - `saveas` (String, optional): 输出文件名 (保存在与源文件相同的目录，默认与源文件同名.pdf)

## 返回
- `Promise`

## 示例
```javascript
const params = { filename: 'data:ttt/1.docx', saveas: 'output.pdf' };
cx.svr.file.toPdf(params).then(() => console.log('转换成功')).catch(err => console.error('转换失败', err));
``` 