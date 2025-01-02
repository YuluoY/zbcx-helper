# 配置树
`cx-tree-cfg` 包装 `cx-tree / cx-tree-syn`
通过参数 node（cx_resdir 表中的 node, plugins），构造配置树结点，读取配置的插件信息。
通过 lazy（是否懒加载）确定使用 `cx-tree（懒加载） / cx-tree-syn`组件。如果是非懒加载模式，组件根据配置树信息，读取数据，构造`cx-tree-syn`需要的数据结构。


## 基础用法


## 属性
| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | --- | ----- | ----- |
| lazy | 是否懒加载模式模式 | Boolean | | false |
| **node** | 需要加载的配置树（cx_resdir 表中的 node 值） | String | | |
| vals | 传递给查询的值，在查询中，如果树结点查询需要参数，则由该对象提供。对象的key是配置结点的name, 值是该结点需要的查询参数 | Object | | |
| tree-handler | 树处理对象 | cx.dc.ITreeHandler | | |
| el-atts | `cx-tree/cx-tree-syn 可以接收的属性，会通过v-bind绑定到 cx-tree/cx-tree-syn 组件` | Object | | |
| el-listeners | `cx-tree/cx-tree-syn 可以接收的事件，会通过v-on绑定到 cx-tree/cx-tree-syn 组件` | Object | | |


## 插槽
| 名称 | 描述 | 参数 |
| -----| --- | ---- |
| default | 默认插槽 | data | 