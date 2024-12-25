# docDownload

下载文档。

## 语法

```javascript
static docDownload(params: Object)
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| params | Object | 参数对象 |
| params.att | Object | 文档属性 |
| params.att.id | Object | id |

## 返回值

无

## 示例

```javascript
// 下载文档
cx.plug.docDownload({
  att: {
    id: 'doc123'
  }
});
```

## 注意事项

- 需要提供正确的文档ID
- 下载前会检查文档是否存在
- 下载过程中会显示进度提示
- 支持大文件下载
- 下载完成后会自动打开文件保存对话框