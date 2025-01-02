# 标签菜单项

`cx-menu-tag` 标签形式展示菜单项。

## 基础用法

使用 `menus` 定义标签菜单项列表。

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| size | 尺寸 | String | large / default / small | default |
| menus | 菜单对象序列 | `Array.<TagCfg>` | | |
| style | 样式 | String | | |

## TagCfg 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| name | 唯一 key，词表中检索本地名称 | String | | |
| title | 显示名称 | String | | |
| selected | 是否选中 | Boolean | | false |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ----- | ----- | ----- | ----- |
| item-click | 菜单点击事件 | ( menu ) | menu: TagCfg 是菜单数据对象 |
