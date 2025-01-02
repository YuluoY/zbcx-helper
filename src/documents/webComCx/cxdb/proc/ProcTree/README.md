# 流程树

`cx-proc-tree` 展示流程组、流程树(用于选择流程，流程结点(非叶子结点是下面的流程ID组合))

## 基础用法

```vue
<template>
  <cx-proc-tree :treeAtts="treeAtts"/>
</template>

<script>
default {
  data() {
    return {
      treeAtts: []
    }
  }
}
</script>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| size | 尺寸 | String | large / default /small | default |
| nodes | 树节点 | String | | |
| plugs | 插件名 | String | | |
| treeAtts | 映射 cx-tree 组件的属性 | `Object<value>` | | |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ----- | ----- | ----- | -----------------|
| current-change | 当前选择发生变化 | (data) | data数据项 |

## 类型定义

```ts
interface ProcTreeProps {
  /**
   * 尺寸
   * @default default
   */
  size?: 'large' | 'default' | 'small';

  /**
   * 树节点
   */
  nodes?: string;

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