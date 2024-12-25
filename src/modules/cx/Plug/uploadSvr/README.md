# uploadSvr

上传后端文件（到 uploadfile:svr/）。

## 语法

```javascript
static uploadSvr()
```

## 参数

无

## 返回值

无

## 示例

```javascript
// 上传文件到服务器
cx.plug.uploadSvr();
```

## 注意事项

- 用于上传文件到服务器指定目录
- 上传路径固定为 uploadfile:svr/
- 上传过程中会显示进度提示
- 支持大文件上传
- 上传完成后会返回上传结果 