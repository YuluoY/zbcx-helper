# OrgUsrAuthTree 授权部门人员树

根据 depadm 授权，展示授权部门 + 人员 的树结构。

## 基础用法

```vue
<template>
  <cx-org-usr-auth-tree
    size="default"
    :tree-atts="{}"
    @current-change="onCurChange"
    @organ-change="onOrganChange"
  />
</template>

<script>
export default {
  methods: {
    onCurChange(data) {
      // 当前选择发生变化
    },
    onOrganChange(data) {
      // 当前选择发生变化
    }
  }
}
</script>
```

## Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| size | String | default | UI 规格 |
| tree-atts | Object | - | 映射 cx-tree 组件的属性 |

## Events

| 事件名 | 说明 | 参数 |
|--------|------|------|
| current-change | 当前选择发生变化 | function(data) |
| organ-change | 当前选择发生变化 | function(data) |

## 类型定义

```ts
interface OrgUsrAuthTreeProps {
  /**
   * UI 规格
   * @default default
   */
  size?: string;

  /**
   * 映射 cx-tree 组件的属性
   */
  treeAtts?: Record<string, any>;
} 
```