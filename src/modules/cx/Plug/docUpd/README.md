# docUpd

修改文档信息。

## 语法

```javascript
static docUpd(params: Object)
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| params | Object | 参数对象 |
| params.att | Object | 文档属性 |
| params.att.title | Object | 显示名称 |
| params.att.filename | Object | 存储文件名 |

## 返回值

无

## 示例

```javascript
// 修改文档信息
cx.plug.docUpd({
  att: {
    title: '新文档名称',
    filename: 'newfile.doc'
  }
});
```

## 注意事项

- 需要提供正确的文档属性
- 显示名称和文件名不能为空
- 文件名需要包含正确的扩展名
- 不能修改为已存在的文件名
- 修改成功后需要刷新相关视图