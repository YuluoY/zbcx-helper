# 工具条

`cx-tool-bar` 对常用工具组成工具条，如：点击选择、窗口复位等

## 基础用法

使用 `tools` 属性传入工具菜单组序列，每个组由 ToolConf 对象序列组成。

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| tools | 工具菜单组序列，即为二维数组。每个组由[`ToolConf`](#toolconf数据说明)对象序列组成 | Array | | |
| mode | 展示模式 | String |   horizontal / vertical | *horizontal* |
| startHem | 工具条起始边缘，mode方向与父容器的贴边位置 | String | horizontal模式left/right，vertical模式top/bottom | *right* |
| subToolMode | 子工具条展示模式 | String |   horizontal / vertical | *horizontal* |
| subToolPlace | 子工具条显示位置 | String | horizontal模式top/bottom，vertical模式left/right | *bottom* |
| isCloseByFold | 点击父亲节点关闭子节点 | Boolean | | false |
| isAutoFold | 点击完自动折叠隐藏子节点 | Boolean | | false |
| showTip | 按钮是否显示tip，false按钮有文字且没tip; true按钮无文字有tip | Boolean | | false |
| elTooltip | el中tooltip配置对象，默认使用cx.config.tooltip | Object | |  |
| textInline | 文字在图标右侧同行显示，false时在图标下发显示 | Boolean | | true |
| toolWidth | 按钮宽度，单位px，默认内容自适应 | Number | | |
| toolHeight | 按钮高度，单位px，默认内容自适应 | Number | | |
| fontSize | 文字大小 | String | | .14rem |
| iconSize | 图标大小 | String | | .16rem |
| grpGap | 组之间的间距 | String | | .08rem |

## ToolConf数据说明

| 名称 | 说明 | 类型 |
| ----- | ----- | ----- |
| **name** | 唯一key | String |
| title | 显示名称，词表中检索本地名称 | String |
| namec | 中文名称，名称备注 | String |
| icon | 图标，配置样式class名 或 基于static/img的目录 | String |
| disabled | 是否禁用 | Boolean |
| plugin | 工具绑定的插件名。有插件值的节点才能激活，否则作为组节点处理ui | String |
| click | 工具绑定响应方法，与plugin二选一。有函数的节点才能激活，否则作为组节点处理ui | Function |
| params | 参数对象，传入运行的插件 | Object |
| style | 该工具样式，设置对应工具项的dom样式 | String |
| children | 子菜单对象序列 | Array |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ----- | :----- | ----- | ----- |
| tool-click | 点击工具按钮事件，工具按钮有plugin时先触发tool-active事件，再次点击已激活工具先触发tool-inactive事件 | `{ tool, pTool, oldTool }` | tool是目标工具对象，pTool是父工具，oldTool是切换前的工具对象 |
| tool-active | 工具按钮激活的事件 | `{ tool, pTool, oldTool }` | tool是目标工具对象，pTool是父工具，oldTool是切换前的工具对象 |
| tool-inactive | 工具按钮取消激活事件 | `{ tool, pTool, oldTool }` | tool是目标工具对象，pTool是父工具，oldTool是切换前的工具对象 |