# OrgUsrTree 部门人员树

展示完整的组织结构 + 人员树。

## 基础用法

```vue
<template>
  <cx-org-usr-tree
    size="default"
    :plugs="[]"
    :hides="[]"
    :show-disabled="false"
    :show-checkbox="false"
    :show-filter="false"
    :tree-atts="{}"
    @current-change="(data, node) => {}"
    @check-change="(data, checked, childrenChecked) => {}"
    @node-expand="(data, node, context) => {}"
  />
</template>
```

## Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| size | String | default | UI 规格 |
| plugs | Array.<cx.dc.PlugNode> | - | 插件列表 |
| hides | Array.<String> | - | 需要隐藏的ID列表 |
| show-disabled | Boolean | false | 是否显示禁用的用户 |
| show-checkbox | Boolean | false | 是否显示checkbox |
| show-filter | Boolean | false | 是否显示过滤输入框 |
| tree-atts | Object | - | 映射 cx-tree 组件的属性 |

## Events

| 事件名 | 说明 | 参数 |
|--------|------|------|
| current-change | 当前选择发生变化 | function(data, node) |
| check-change | check 发生变化 | function(data, checked, childrenChecked) |
| node-expand | 结点展开 | function(data, node, context) |

## 类型定义

```ts
interface OrgUsrTreeProps {
  /**
   * UI 规格
   * @default default
   */
  size?: string;

  /**
   * 插件列表
   */
  plugs?: Array<any>;

  /**
   * 需要隐藏的ID列表
   */
  hides?: Array<string>;

  /**
   * 是否显示禁用的用户
   * @default false
   */
  showDisabled?: boolean;

  /**
   * 是否显示checkbox
   * @default false
   */
  showCheckbox?: boolean;

  /**
   * 是否显示过滤输入框
   * @default false
   */
  showFilter?: boolean;

  /**
   * 映射 cx-tree 组件的属性
   */
  treeAtts?: Record<string, any>;
} 
```