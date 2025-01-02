# 单图片组件 - 鼠标滑入显示遮罩

`cx-card-matte` 图片鼠标滑入显示遮罩、详细介绍和相关按钮组件。

## 基础用法

使用 `cardmatte` 传递组件参数，通过 `type` 控制是否使用自定义插槽。

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ----| ---- | ----- | ----- |
| **cardmatte** | 传递给组件的参数 | CardMatteConfig | | |
| **type** | 是否使用自定义插槽（默认模板/自定义） | String | default / custom | default |

## CardMatteConfig 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----------- | ---- | ------ | ------ | ----- |
| **img** | 背景图片 | String | | |
| **content** | 内容 | Array<ContentItem> | | |
| **briefintro** | 简介 | String | | |
| **buttonname** | 按钮名称 | String | | |

## ContentItem 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---------- | ---- | ------ | ------ | ----- |
| **namec** | 名称 | String | | |
| **icon** | 图标 | String | | |

## 插槽

| 名称 | 说明 | 参数 |
| ---- | --- | --- |
| center | 中间插槽 | |
| footer | 底部插槽 | |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ---------- | --------------- | ---- | -------- |
| click-detail | 点击查看详细内容 | val | |
| click-icon | 点击图标触发事件 | val | |
