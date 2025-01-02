# 文件上传信息条

`cx-file-uploader` 文件上传信息条组件，用于显示文件上传的状态和进度。

## 基础用法

```vue
<cx-file-uploader
  :size="default"
  :file="file"
  @pause-click="onPauseClick"
  @continue-click="onContinueClick"
  @abort-click="onAbortClick"
/>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ----- | ----- |
| size | 尺寸 | String | large / default / small | default |
| file | 文件信息 | FileInfo | - | - |

## FileInfo 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ----- | ----- |
| id | 文件ID | Number | - | - |
| filename | 文件名 | String | - | - |
| filelength | 文件大小 | Number | - | - |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ---- | ---- | ---- | ----- |
| pause-click | 暂停上传时触发 | (file: FileInfo) | 上传文件对象 |
| continue-click | 继续上传时触发 | (file: FileInfo) | 上传文件对象 |
| abort-click | 取消上传时触发 | (file: FileInfo) | 上传文件对象 |
