# 树-异步
`cx-tree` 异步树 (配置树，懒加载数据)，使用cx_resdir配置表, 结合 [`cx.dc.TreeNode`](http://192.168.2.229:81/api/zbcx_cx/4.2/cx.dc.DcTree.html) 节点构造器，根据规则动态生成树节点；按需通过 [cx.dc.PlugNode](http://192.168.2.229:81/api/zbcx_cx/4.2/cx.dc.DcPlug.html)动态给每个节点设置右键菜单.


## 基础用法
使用showCheckbox=true，可显示复选框；通过disable-node函数控制节点是否禁用；通过expand-node函数来决定是否展开。


## 右键插件
使用`cx.dc.PlugNode` 动态给每个节点设置右键菜单


## 属性
| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | --- | ----- | ----- |
| **nodes** | 树结构数组，通过cx.dc.TreeNode/TreeLeaf构成树结构 | `Array.<cx.dc.TreeNode>` | | |
| **plugs** | 右边键插件，通过cx.dc.PlugNode构成树状结构，显示成菜单 | `Array.<cx.dc.PlugNode>` | | |
| show-checkbox | 显示checkbox | Boolean | | false |
| show-tip | 显示提示信息 | Boolean | | false |
| expand-root | 展开根节点 | Boolean | | false |
| expand-all | 展开全部结点 | Boolean | | false |
| show-filter | 显示过滤输入框 | Boolean | | false |
| select-first | 选中第一个结点 | Boolean | | false |
| check-node | 是否 check 结点，返回值 true - 选中 | (data) | | |
| hide-node | 是否隐藏结点，返回值 true - 隐藏 | (data) | | |
| disable-node | 是否禁能结点，返回值 true - 禁能 | (data) | | |
| expand-node | 是否展开结点，返回值 true - 禁能 | (data) | | |
| tree-handler | 树处理对象 | cx.dc.ITreeHandler | | |
| exp-fld-val | 生成判断条件的字段信息、值等 | (flds, values, data, nodeName) | | |
| el-atts | el-tree可以接收的原生属性对象，会通过v-bind绑定到el-tree上，如： {'check-strictly': true} | Object | | |
| el-listeners | el-tree可以接收的原生事件注册对象，会通过v-on绑定到el-tree上，如： {'node-drop': this.onNodeDrop} | Object | | |


## 事件
treeListeners绑定原生事件参考[饿了么的文档](https://element-plus.gitee.io/zh-CN/component/tree.html#%E4%BA%8B%E4%BB%B6)

| 名称 | 说明 | 参数 | 参数说明 |
| ---- | ----- | ---- | ----- |
| current-change | 当前选中结点发生变化 | (data, node) | 结点上的data，结点 |
| node-click | 点击树结点 | (node, data, dom, event) | 结点，结点上的data，dom 元素，event事件 |
| check-change | 树上 check 发生变化 | (data, checked, childrenChecked) | 结点上的data，checked 当前节点是否选中，childrenChecked 儿子节点是否选中 |
| node-expand | 展开结点 | (data, node, context) | 结点上的data，结点，上下文 |
| node-collapse | 折叠结点 | (data, node, context) | 结点上的data，结点，上下文 |


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