# 折叠菜单

`cx-menu-fold` 可水平和垂直展示任意多层的菜单，但是两层结构效果比较好。基于 [Element Plus Menu 组件](https://element-plus.org/zh-CN/component/menu.html)。

可通过`.cx-menufold .cx-menuitem` 过滤器定义每个菜单项样式，如边距和颜色。

## 基础用法

构造数据 `menus` 对象展示菜单，子菜单以 children 为连接，`defActive` 设置默认激活状态菜单。

## 纵向折叠

纵向`vertical`展示折叠菜单，一般靠左侧展示；可通 `isCollapse` 属性配置是否可侧向折叠展示图标。

## 纵向不折叠

纵向`vertical`展示折叠菜单，一般靠左侧展示；可通 `isCollapse` 属性配置是否可侧向折叠展示图标。

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| size | 尺寸 | String | large / default / small | default |
| menus | 菜单对象序列，必填 | `Array.<MenuCfg>` | | |
| defActive | 默认激活菜单，只表现激活状态，不触发激活消息；结构与 menus 数据项一致 | MenuCfg | | |
| isCollapse | 是否展示折叠按钮，vertical 模式才生效 | Boolean | | true |
| foldTitle | 折叠按钮的标题，this.$t('cx.base.fold')=折叠 | String | | |
| elAtts | [Element Plus Menu 组件的属性对象](https://element-plus.org/zh-CN/component/menu.html#menu-attributes) | Object | | `{'mode':'vertical'}` |
| inverse | 是否反色显示 | Boolean | false/true | false |

## MenuCfg 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| name | 唯一 key，词表中检索本地名称 | String | | |
| title | 显示名称 | String | | |
| namec | 中文名称，名称备注方便维护 | String | | |
| icon | 菜单图标，样式`class`名或基于`public/static`的文件路径。如：cx-fi ic-qry 或 img/ui/pnt.svg | String | | |
| grp | 菜单组，与 name 形成自关联，根节点 grp='' | String | | |
| disporder | 相同 grp 中的显示顺序 | Number | | |
| plugin | 菜单运行的路由插件名 | String | | |
| params | 参数对象，传入运行的插件 | Object | | |
| children | 子菜单对象序列 | `Array.<MenuCfg>` | | |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ----- | ----- | ----- | ----- |
| menu-click | 菜单点击事件 | ({ menu }) | menu: MenuCfg 是菜单数据对象 |
| collapse | 纵向菜单侧向折叠 | (collapse) | collapse: Boolean 是折叠状态 |

## Element Plus Menu 属性

以下是一些常用的 Element Plus Menu 属性,可以通过 `elAtts` 传入:

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| mode | 菜单展示模式 | string | horizontal / vertical | vertical |
| collapse | 是否水平折叠收起菜单 | boolean | — | false |
| background-color | 菜单的背景色 | string | — | #ffffff |
| text-color | 菜单的文字颜色 | string | — | #303133 |
| active-text-color | 当前激活菜单的文字颜色 | string | — | #409EFF |
| default-active | 当前激活菜单的 index | string | — | — |
| default-openeds | 当前打开的 sub-menu 的 index 的数组 | Array | — | — |
| unique-opened | 是否只保持一个子菜单的展开 | boolean | — | false |
| menu-trigger | 子菜单打开的触发方式，只在 mode 为 horizontal 时有效 | string | hover / click | hover |
| collapse-transition | 是否开启折叠动画 | boolean | — | true |

更多属性请参考 [Element Plus Menu 组件文档](https://element-plus.org/zh-CN/component/menu.html#menu-attributes)
