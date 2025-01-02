# OrgTree 部门组织树

展示完整的组织结构树。

## 基础用法

```vue
<template>
  <cx-org-tree
    size="default"
    :plugs="[]"
    :disables="''"
    :no-cache="false"
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
| plugs | Array.<cx.dc.PlugNode> | - | 插件列表 |
| disables | String | - | 需要禁能的ID列表 |
| no-cache | String | false | 是否不进行缓存 |
| tree-atts | Object | - | 映射 cx-tree 组件的属性 |

## Events

| 事件名 | 说明 | 参数 |
|--------|------|------|
| current-change | 当前选择发生变化 | function(data) |

## 类型定义

```ts
interface OrgTreeProps {
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
   * 需要禁能的ID列表
   */
  disables?: string;

  /**
   * 是否不进行缓存
   * @default false
   */
  noCache?: string;

  /**
   * 映射 cx-tree 组件的属性
   */
  treeAtts?: Record<string, any>;
} 
```