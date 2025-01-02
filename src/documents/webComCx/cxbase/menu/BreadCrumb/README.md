# 面包屑

`cx-bread-crumb` 记录路径数据。

## 基础用法

使用 `title`, `size` 定义卡片。

使用 `separator` 定义分隔符。

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| size | 尺寸 | String | large / default / small | default |
| separator | 分隔符 | String | | |
| separator-icon | 图标分隔符的组件或组件名 | String / Component | | |
| lists | 面包屑对象列表 | `Array.<CrumbConf>` | | |

## CrumbConf 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| name | 名称 | String | | |
| path | 路由 | String | | |
| replace | 是否留下记录 | Boolean | | false |
