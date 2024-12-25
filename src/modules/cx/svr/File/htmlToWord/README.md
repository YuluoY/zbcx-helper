# htmlToWord

## 描述
html 转 word

## 参数
- `params` (Object): 参数
  - `html` (String): HTML内容
  - `saveas` (String, optional): 输出文件名

## 返回
- `Promise`

## 示例
```javascript
const params = { html: '<h1>标题</h1>', saveas: 'output.docx' };
cx.svr.file.htmlToWord(params).then(() => console.log('转换成功')).catch(err => console.error('转换失败', err));
``` 