# 解析kml文件

`cx-read-kml` 解析kml文件，基于 [Element Plus Upload 组件](https://element-plus.org/zh-CN/component/upload.html)。

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| size | UI规格 | String | | default |
| elAtts | [el-upload组件可接收的参数对象](https://element-plus.org/zh-CN/component/upload.html#%E5%B1%9E%E6%80%A7) | {`Object`} | | |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ----- | :----- | ---- | ----- |
| after-read | 文件内容解析成功后的回调函数 - Function(jsonData, fileList, this) | | |

## 插槽

| 名称 | 描述 | 参数 |
| ---- | --- | --- |
| default | 内容部分，参考[el-upload默认插槽](https://element-plus.org/zh-CN/component/upload.html#%E6%8F%92%E6%A7%BD) | |
