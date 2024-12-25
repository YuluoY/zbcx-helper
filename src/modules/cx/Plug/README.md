# Plug

`cx.plug` 插件辅助类提供了一系列用于处理文档、目录和文件操作的静态工具方法。

## 特点

- 提供文档操作相关的静态方法
- 提供目录操作相关的静态方法
- 提供文件操作相关的静态方法
- 提供标签属性操作相关的静态方法
- 提供上传相关的静态方法

## 静态方法

### 文档操作
- `docDel` - 删除文档
- `docDownload` - 下载文档
- `docUndel` - 恢复文档
- `docUpd` - 修改文档信息

### 目录操作
- `dirAdd` - 增加文件目录
- `dirDel` - 删除文件目录
- `dirUpd` - 修改文件目录
- `docdirAdd` - 增加文档目录
- `docdirDel` - 删除文档目录
- `docdirUpd` - 修改文档目录

### 文件操作
- `fileDel` - 删除文件
- `fileDownload` - 下载文件
- `fileUpd` - 修改文件

### 标签属性操作
- `tabAttDel` - 删除标签属性
- `tabAttUpd` - 更新标签属性
- `tabAttView` - 查看标签属性

### 上传操作
- `uploadSvr` - 上传服务
- `uploadUpdate` - 更新上传

## 使用示例

```javascript
// 增加文件目录
cx.plug.dirAdd({
  context: contextObj,
  curNode: currentNode
});

// 下载文档
cx.plug.docDownload({
  att: {
    id: 'doc123'
  }
});

// 更新标签属性
cx.plug.tabAttUpd({
  // 参数配置
});
```

## 注意事项

- 所有方法都是静态方法，通过 `cx.plug` 直接调用
- 操作前请确保参数对象包含必要的属性
- 文件和目录操作需要相应的权限
- 上传操作需要配置正确的服务器地址 