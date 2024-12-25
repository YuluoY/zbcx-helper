# uploadUpdate

上传系统升级包（到 uploadfile:update/）。

## 语法

```javascript
static uploadUpdate()
```

## 参数

无

## 返回值

无

## 示例

```javascript
// 上传系统升级包
cx.plug.uploadUpdate();
```

## 注意事项

- 用于上传系统升级包文件
- 上传路径固定为 uploadfile:update/
- 上传前会验证升级包的有效性
- 上传过程中会显示进度提示
- 上传完成后需要进行系统升级操作 