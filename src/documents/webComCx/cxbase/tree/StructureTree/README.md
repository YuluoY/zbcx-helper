# 组织结构树

`cx-structure-tree` 是一个用于展示组织结构的树形控件，以卡片形式展示节点信息。

## 基础用法

使用 `data` 属性传入树形数据，通过 `render-content` 属性自定义节点渲染内容。

```vue
<cx-structure-tree :data="data" :render-content="renderContent">
  <template v-slot:card>
    <div class="card">自定义内容</div>
  </template>
</cx-structure-tree>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ----- | ----- |
| data | 树节点数据 | TreeNode | | - |
| renderContent | 自定义渲染内容 | Function(node) | | - |

## TreeNode 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ----- | ----- |
| id | 节点ID | String/Number | | - |
| pid | 父节点ID | String/Number | | - |
| label | 节点标签 | String | | - |
| children | 子节点 | TreeNode[] | | - |
| disabled | 是否禁用 | Boolean | | false |
| noDragging | 是否禁止拖拽 | Boolean | | false |
| style | 节点样式 | Object | | - |

## 插槽

| 名称 | 说明 | 作用域参数 |
| ---- | ---- | ---- |
| card | 自定义卡片内容 | - |
