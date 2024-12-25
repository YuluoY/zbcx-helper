# fileDownload

下载文件。

## 语法

```javascript
static fileDownload(params: Object)
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| params | Object | 参数对象 |
| params.att | Object | 文件属性 |
| params.att.id | Object | id |

## 返回值

无

## 示例

```javascript
// 下载文件
cx.plug.fileDownload({
  att: {
    id: 'file123'
  }
});
```

## 注意事项

- 需要提供正确的文件ID
- 下载前会检查文件是否存在
- 下载过程中会显示进度提示
- 支持大文件下载
- 下载完成后会自动打开文件保存对话框 