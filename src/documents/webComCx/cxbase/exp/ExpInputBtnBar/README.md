# 属性条件输入搜索按钮条

`cx-exp-input-btn-bar` 条件和查询占一行，按钮条占一行的组件。

## 基础用法

构造 `flds` 字段序列，通过 `cx.AttBase` 对象的 `makeExp` 方法构造字段配置。

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| size | UI规格 | String | large / default / small | default |
| exp-atts | 组件cx-exp-input的参数对象 | Object | | |
| exp-evts | 组件cx-exp-input的事件监听对象 | Object | | |
| opers | 组件cx-oper-group的opers参数 | Array | | |
| oper-el-att | 组件cx-oper-group中el-button的参数对象 | Object | | |
| max-num | 组件cx-oper-group显示的最多按钮数 | Number | | 3 |
| inline | 组件cx-oper-group是否和exp同行显示 | Boolean | | false |

## OperCfg 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| title | 标题 | String | | |
| icon | 图标 | String | | |
| show | 是否可见 | Boolean / Function | | true |
| enable | 是否使用 | Boolean / Function | | true |
| type | 按钮类型（参见 el-button 的 type） | String | | |
| showTitle | 是否显示标题 | Boolean | | true |
| showIcon | 是否显示图标 | Boolean | | true |
| onClick | 点击响应函数（onClick与plugin必须二选一） | Function | | |
| plugin | 点击运行的插件名称（onClick与plugin必须二选一） | String | | |
| uicfg | 配置信息 | Object | | |
| uicfg.button | 按钮配置信息（参见 el-button 的属性） | Object | | |
| uicfg.divided | 是否在上方显示分隔条 | Boolean | | false |

## 组件 cx-exp-input 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| size | UI规格 | String | large / default / small | default |
| flds | 字段信息数组 | Array | | |
| item-width | 输入框大小(像素为单位) | Number | | 125 |
| show-label | 是否显示标签 | Boolean | | false |
| show-more | 是否显示more | Boolean | | true |
| clearable | 是否可清除 | Boolean | | true |

## 组件 cx-exp-input 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ----- | ----- | ---- | ----- |
| fld-change | 字段值发生变化 | (state, val) | state:选中状态,val:选中对象 |
| exp-search | 按条件搜索 | | |
| exp-clear | 清除条件 | | |
| exp-more | 更多条件 | | |