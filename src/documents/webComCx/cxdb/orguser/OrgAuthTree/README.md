# OrgAuthTree 授权部门树

根据 depadm 授权，展示授权部门的树结构。

## 基础用法

```vue
<template>
  <cx-org-auth-tree
    size="default"
    :tree-atts="{}"
    @current-change="onCurrentChange"
  />
</template>

<script>
default {
  methods: {
    onCurrentChange(data) {
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

## 类型定义

```ts
interface OrgAuthTreeProps {
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