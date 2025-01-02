# 面板菜单

`cx-menu-panel` 以气泡框的形式展示菜单。一般展示三级菜单；一级菜单独立，二级三级在面板中展示。

## 基础用法

使用 `maxCols` 控制面板中的列数，`defActive` 设置默认激活状态菜单。

## 纵向菜单面板

纵向展示菜单，面板靠左侧展示。

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| size | 尺寸 | String | large / default / small | default |
| menus | 菜单对象序列，必填。见[`cx-menu-fold`](../MenuFold/README.md)中说明 | `Array.<MenuCfg>` | | |
| defActive | 默认激活菜单，只表现激活状态，不触发激活消息；结构与 menus 数据项一致 | MenuCfg | | |
| mode | 展示模式，水平 horizontal 或 垂直 | String | horizontal / vertical | horizontal |
| maxCols | 一行中的列数 | Number | | 8 |
| grpWidth | 一列菜单组的宽度，默认使用组件样式宽度, 如：1rem | String | | |
| inverse | 是否反色显示 | Boolean | false/true | false |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ----- | ----- | ----- | ----- |
| menu-click | 菜单点击事件 | ({ menu }) | menu: MenuCfg 是菜单数据对象 |
