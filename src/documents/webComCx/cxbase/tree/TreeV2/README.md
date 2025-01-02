# 虚拟树
`cx-tree-v2` 虚拟树，不论你的数据量多大，虚拟树都能毫无压力地处理。


## 基础用法
主要是用来显示节点很多的场景，其他类似前两个树组件。


## 属性
| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| **data** | 树节点 | `Array.<NodeData>` | | |
| plugs | 右边键 | `Array.<cx.dc.PlugNode>` | | |
| tips | 提示信息 | [Object](#tips属性) | | |
| show-checkbox | 显示 checkbox | Boolean | | false |
| def-expands | 默认展开的结点 Id 序列 | `Array.<nodeKey>` | | |
| def-checked | 默认 checked 的结点 Id 序列 | `Array.<nodeKey>` | | |
| def-current-node | 默认选中的结点 ID | nodeKey | | |
| show-filter | 显示过滤输入框 | Boolean | | false |
| select-first | 选中第一个结点 | Boolean | | false |
| run-plug | 自定义执行插件 - funciton(plugNode, node) | Function | | |
| exp-fld-val | 生成判断条件的字段信息、值等 - function(flds, values, nodeData, nodeName) | Function | | |
| plug-params | 为插件运行提供参数 - function(key, nodeData) | Function | | |
| el-atts | el-tree可以接收的原生属性对象，会通过v-bind绑定到el-tree上，如： {'check-strictly': true} | Object | | |
| el-listeners | el-tree可以接收的原生事件注册对象，会通过v-on绑定到el-tree上，如： {'node-drop': this.onNodeDrop} | Object | | |


## NodeData 属性
| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| id | 每个数据的标识, 即 nodeKey | Number / String | — | |
| label | 显示标签 | String | | |
| disabled | 是否禁用 | Boolean | | false |
| icon | 图标 | String | — | |
| children | 子节点序列 | `Array.<NodeData>` | | |


## tips属性
| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | --- | ----- | ----- |
| showTip | 是否展示tips | Boolen | | |
| tipPlace | 显示位置 | String | 'top'/'top-start'/'top-end'/'bottom'/'bottom-start'/'bottom-end'/'left'/'left-start'/'left-end'/'right'/'right-start'/'right-end'| |
| effect | 风格 | String | 'dark'/'light' | |


## 事件
treeListeners绑定原生事件参考[饿了么的文档](https://element-plus.gitee.io/zh-CN/component/tree.html#%E4%BA%8B%E4%BB%B6)

| 名称 | 说明 | 参数 | 参数说明 |
| ----- | ----- | ----- | ----- |
| node-click | 当节点被点击的时候触发 | data、node、event | node 节点对象，data 构造节点的数据、e: MouseEvent |
| current-change | 当前选中节点变化时触发的事件 | data、node | node 节点对象，data 构造节点的数据 |
| check-change | 节点选中状态发生变化时的回调 | data、checked | data 构造节点的数据，checked 当前节点是否选中 |
| check | 当复选框被点击的时候触发 | | `(data: TreeNodeData, info: { checkedKeys,checkedNodes, halfCheckedKeys, halfCheckedNodes})` |
| node-expand | 节点被展开时触发的事件 | data、node | node 节点对象，data 构造节点的数据 |
| node-collapse | 节点被关闭时触发的事件 | data、node | node 节点对象，data 构造节点的数据 |


## 方法
| 名称 | 说明 | 参数 | 参数说明 | 返回说明 |
| --- | -----| ---- | ----- |----- |
| getTree | 获取树的组件对象，返回el-tree对象 | () | | `{el-tree}` |


## 插槽
| 名称 | 描述 | 参数 |
| ---- | --- | --- |
| default | 内容部分，插槽参数 { data: NodeData } | | 