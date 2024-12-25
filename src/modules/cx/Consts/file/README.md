# 文件类型相关常量

## FILE_AUDIO
音频文件类型。

## FILE_DOC
文档文件类型。

## FILE_IMG
图片文件类型。

## FILE_VIDEO
视频文件类型。

## 示例

```js
// 判断是否为图片文件
if (file.type === cx.consts.FILE_IMG) {
  // 图片文件特定的处理逻辑
}

// 判断是否为音频文件
if (file.type === cx.consts.FILE_AUDIO) {
  // 音频文件特定的处理逻辑
}

// 判断是否为视频文件
if (file.type === cx.consts.FILE_VIDEO) {
  // 视频文件特定的处理逻辑
}

// 判断是否为文档文件
if (file.type === cx.consts.FILE_DOC) {
  // 文档文件特定的处理逻辑
}
``` 