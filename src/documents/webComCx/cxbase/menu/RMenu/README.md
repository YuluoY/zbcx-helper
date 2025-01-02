# 右键菜单

`cx-r-menu` 右键弹出菜单。

## 基础用法

使用 `data` 定义菜单项列表，通过 `show` 和 `hide` 方法控制菜单的显示和隐藏。

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| --- | ---- | ---- | ----- | ----- |
| size | 尺寸 | String | large / default / small | default |
| data | 菜单对象序列 | `Array.<RmenuCfg>` | | |

## RmenuCfg 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ----| ---- | ----- | ----- |
| id | 唯一值，作为 key | any | | |
| title | 标题 | String | | |
| icon | 图标 | String | | |
| visible | 是否可见，默认不可见 | Boolean | | false |
| disabled | 是否禁止 | Boolean | | false |
| uicfg | 配置信息 | Object | | |
| uicfg.divided | 是否在上方方显示分隔条 | Boolean | | false |
| children | 子菜单(递归) | Array | | |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| --- | --- | ---- | ----- |
| item-click | 菜单点击事件 | ( menu ) | menu: RmenuCfg 是菜单数据对象 |

## 方法

| 名称 | 说明 | 参数 | 参数说明 | 返回说明 |
| --- | -----| ---- | ----- |----- |
| hide | 隐藏右键菜单 | (event) | event: Event 鼠标事件对象 | |
| show | 显示右键菜单 | (event) | event: Event 鼠标事件对象 | |
