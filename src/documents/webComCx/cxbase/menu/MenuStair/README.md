# 一级菜单

`cx-menu-stair` 单行或单列展示菜单，一般放在系统头部。

## 基础用法

构造 `menus` 数据序列，展示一级菜单，`defActive` 设置默认激活状态菜单。

## 纵向菜单面板

纵向展示菜单。

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| size | 尺寸 | String | large / default / small | default |
| menus | 菜单对象序列，必填。见[`cx-menu-fold`](../MenuFold/README.md)中说明 | `Array.<MenuCfg>` | | |
| defActive | 默认激活菜单，只表现激活状态，不触发激活消息；结构与 menus 数据项一致 | MenuCfg | | |
| mode | 展示模式，水平 horizontal 或 垂直 | String | horizontal / vertical | horizontal |
| borderPosition | 激活菜单 border 显示位置 | String | top/right/bottom/left | 水平 bottom，垂直 right |
| inverse | 是否反色显示 | Boolean | false/true | false |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ----- | ----- | ----- | ----- |
| menu-click | 菜单点击事件 | ({ menu }) | menu: MenuCfg 是菜单数据对象 |
| menu-mouseover | 鼠标移入菜单事件 | ({ menu }) | menu: MenuCfg 是菜单数据对象 |
| menu-mouseout | 鼠标移出菜单事件 | ({ menu }) | menu: MenuCfg 是菜单数据对象 |
| menu-contextmenu | 菜单右键点击事件 | ({ menu }) | menu: MenuCfg 是菜单数据对象 |

## 插槽

| 名称 | 描述 | 参数 |
| ---- | --- | --- |
| menu-suffix | 菜单后缀插槽， 参数为 { menu } 是菜单数据对象 | |
