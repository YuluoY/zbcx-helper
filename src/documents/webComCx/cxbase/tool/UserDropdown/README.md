# 用户自定义快捷菜单

`cx-user-dropdown` 用户自定义快捷菜单

## 基础用法

使用 `username` 属性传入用户名称，不传时会取 $g.user.name。

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| size | UI规格 | String | | default |
| username | 显示的用户名称,不传时会取$g.user.name | String | | |
| filterMenu | 自定义过滤菜单数组的函数 - Function(menus) | Function | | |
| trigger | 下拉菜单触发的方式，默认为click | String | | click |
| childPlacement | 子菜单显示位置 | String | | left |
| highStyle | 子菜单选中状态样式 | String | | background: var(--cx-color-text-active);color:var(--cx-color-light-8) |
| extraMenus | 自定义菜单组，| [`Array.<MenusItem>`](#MenusItem-属性) | | |

## MenusItem-属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| name | 菜单唯一标识，必传！ | String | | |
| title | 菜单名称，必传！ | String | | |
| click | 菜单点击后的回调函数，必传！回调参数：一、如果是无下级选项的根菜单，回调参数为（menu）;二、如果是二级菜单选项，回调参数为（child, parent）,分别为当前二级菜单撇盒子对象和父菜单配置对象 | Function | | |
| icon | 菜单图标，会绑定到cx-icon组件的icon属性上。如：`cx-fi ic-setting` | String | | |
| divided | 是否需要在上方添加分割线 | String | | |
| children | 儿子菜单集合，配置项同父菜单的name、title | Array | | |
| value | 当包含二级选项时，父菜单需要包含value属性，用于指向当前激活的二级选项的name值，二级选项切换时，需要手动更新value值。 | String | | |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ----- | :----- | ---- | ----- |
| show-userinfo | 显示用户个人信息 - Function(this) | | |
| sys-config | 打开系统设置 - Function(this) | | |
| pswEdit | 修改密码 - Function(this) | | |
| help | 帮助 - Function(this) | | |
| exit | 退出登录 - Function(this) | | |
| locale-change | 语言发生切换 - Function(locale,this) | | |
| theme-change | 主题发生切换 - Function(theme,this) | | |
| size-change | 全局尺寸发生切换 - Function(size,this) | | | 