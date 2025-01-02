# ProcTreeSyn 同步流程树

`cx-proc-tree-syn` 展示同步流程组、流程树

## 基础用法

```vue
<template>
  <cx-proc-tree-syn :data="data"/>
</template>

<script>
default {
  data() {
    return {
      data: null
    }
  }
}
</script>
```

## Props

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|---------|--------|
| size | 尺寸 | String | large / default /small | default |
| data | 流程树数据 | Object | | |
| plugs | 插件名 | String | | |
| treeAtts | 映射 cx-tree 组件的属性 | Object<value> | | |

## Events

| 名称 | 说明 | 参数 | 参数说明 |
|------|------|------|-----------|
| current-change | 当前选择发生变化 | (data) | data数据项 |

## 类型定义

```ts
interface ProcTreeSynProps {
  /**
   * 尺寸
   * @default default
   */
  size?: 'large' | 'default' | 'small';

  /**
   * 流程树数据
   */
  data?: Record<string, any>;

  /**
   * 插件名
   */
  plugs?: string;

  /**
   * 映射 cx-tree 组件的属性
   * @required
   */
  treeAtts: Record<string, any>;
} 
```