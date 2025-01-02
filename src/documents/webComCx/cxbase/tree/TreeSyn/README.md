# 树-同步
`cx-tree-syn` 同步树 (配置树，组织好全部数据)


## 基础用法


## 复选框以及禁用复选框
通过NodeData属性的disabled设置节点复选框禁用


## 异步数据转同步数据
可以使用[dc.tree.TreeData](http://192.168.2.229:81/api/zbcx_cx/4.2/cx.dc.TreeData.html)函数进行数据转换，将异步树结构切换为同步树结构


## 右键菜单
可以使用[cx.dc.Plug](http://192.168.2.229:81/api/zbcx_cx/4.2/cx.dc.DcPlug.html)类配置插件


## 自定义节点内容
1.使用slot来展示自定内容。
2.使用element-tree的render-content，通过tree-atts传递给组件，tree-atts数据会v-bind到树上。


## 属性
| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | --- | ----- | ----- |
| **data** | 树节点数据，树状结构，儿子结点用 children[] | `Array.<Object>` | | |
| **plugs** | 右边键插件，通过cx.dc.PlugNode构成树状结构，显示成菜单 | `Array.<cx.dc.PlugNode>` | | |
| tips | 提示信息 | [Object](#tips属性) | | |
| tipConf | tip配置，建element | Object | | `{effect: 'dark', placement: 'right'}` |
| tipEllipsis | 缩略文本函数，不缩略时返回空 | Function | | |
| show-checkbox | 显示checkbox | Boolean | | false |
| expand-root | 展开根节点 | Boolean | | false |
| expand-all | 展开全部结点 | Boolean | | false |
| show-filter | 显示过滤输入框 | Boolean | | false |
| select-first | 选中第一个结点 | Boolean | | false |
| def-expands | 默认展开的结点 Id 序列 | `Array.<nodeKey>` | | |
| def-checked | 默认 checked 的结点 Id 序列 | `Array.<nodeKey>` | | |
| def-current-node | 默认选中的结点 ID | `nodeKey` | | |
| check-node | 是否 check 结点，返回值 true - 选中 | (data) | | |
| hide-node | 是否隐藏结点，返回值 true - 隐藏 | (data) | | |
| disable-node | 是否禁能结点，返回值 true - 禁能 | (data) | | |
| expand-node | 是否展开结点，返回值 true - 禁能 | (data) | | |
| el-atts | el-tree可以接收的原生属性对象，会通过v-bind绑定到el-tree上，如：{'check-strictly': true} | Object | | |
| el-listeners | el-tree可以接收的原生事件注册对象，会通过v-on绑定到el-tree上，如：{'node-drop': this.onNodeDrop} | Object | | |
| tree-handler | 树处理对象 | `cx.dc.ITreeHandler` | | |
| exp-fld-val | 生成判断条件的字段信息、值等 | (flds, values, nodeData, nodeName) | | |


## NodeData 属性
| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| --- | ---- | ---- | ----- | ---- |
| **id** | 每个数据的标识, 即 nodeKey | Number / String | | |
| **label** | 显示标签 | String | | |
| **isLeaf** | 是否叶子 | Boolean | | false |
| disabled | 是否禁用 | Boolean | | false |
| icon | 图标 | String | | |
| children | 子节点数组，非叶结点必备 | `Array.<NodeData>` | | |
| **att** | 实体属性 | Object | | |
| **cfg** | 树结点配置对象 | Object | | |


## tips属性
| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | --- | ----- | ----- |
| showTip | 是否展示tips | Boolen | | |
| tipPlace | 显示位置 | String | 'top'/'top-start'/'top-end'/'bottom'/'bottom-start'/'bottom-end'/'left'/'left-start'/'left-end'/'right'/'right-start'/'right-end'| |
| effect | 风格 | String | 'dark'/'light' | |


## 事件
treeListeners绑定原生事件参考[饿了么的文档](https://element-plus.gitee.io/zh-CN/component/tree.html#%E4%BA%8B%E4%BB%B6)

| 名称 | 说明 | 参数 | 参数说明 |
| ---- | ----- | ---- | ----- |
| current-change | 当前选中结点发生变化 | (data, node) | 结点上的data，结点 |
| node-click | 点击树结点 | (node, data, dom, event) | 结点，结点上的data，dom 元素，event事件 |
| check-change | 树上 check 发生变化 | (data, checked, childrenChecked) | 结点上的data，checked 当前节点是否选中，childrenChecked 儿子节点是否选中 |
| node-expand | 展开结点 | (data, node, context) | 结点上的data，结点，上下文 |
| node-collapse | 折叠结点 | (data, node, context) | 结点上的data，结点，上下文 |
| check | 点击复选框 | `(data, { checkedNodes, checkedKeys, halfcheckedNodes, halfcheckedKeys })` | |


## 插槽
| 名称 | 描述 | 参数 |
| -----| --- | ---- |
| default | 默认插槽 | data |


## 方法
| 名称 | 说明 | 参数 | 参数说明 | 返回说明 |
| --- | -----| ---- | ----- |----- |
| getTree | 获取树的组件对象，返回el-tree对象 | () | | `{el-tree}` |
| plugParams | 插件运行时取对象里面的各种对象，key支持：'{context}', '{tree}', '{values}', '{curNode}', '{curSel}' | (key) | | |
| addNode | 根据属性，树结点配置，父节点 生成结点并添加到树 | (att, cfg, pnode) | | |
| delNode | 根据结点上的数据，删除结点 | (data) | | |
| updNode | 根据结点数据，修改结点属性（含label） | (att, data) | | | 