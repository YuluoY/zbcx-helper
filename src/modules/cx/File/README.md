# File 类

文件操作相关的工具类。所有方法都是静态方法，可以直接通过类名调用。

## 方法列表

- `checkFilename(filename)` - 检查文件名是否合法
- `defAuthDir(dir)` - 设置默认授权目录
- `defAuthFile(file)` - 设置默认授权文件
- `download(url)` - 下载文件
- `getFileName(filename)` - 获取文件名
- `getFileType(filename)` - 获取文件类型
- `getIcon(type)` - 根据文件名取图标字符串
- `getShortName(filename)` - 获取短文件名
- `isAudio(filename)` - 判断文件名是否是音频文件
- `isDoc(filename)` - 判断文件名是否是文档文件
- `isImage(filename)` - 判断文件名是否是图片文件
- `isPdf(filename)` - 判断文件名是否是PDF文件
- `isVideo(filename)` - 判断文件名是否是视频文件
- `type(filename)` - 取文件的类型(cx.consts.FILE_***)
- `typeAudio(type)` - 判断文件类型是否是音频文件
- `typeDoc(type)` - 判断文件类型是否是文档文件
- `typeImage(type)` - 判断文件类型是否是图片文件
- `typeVideo(type)` - 判断文件类型是否是视频文件 