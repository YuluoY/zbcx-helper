# 流程选择

`cx-proc-select` 下拉选择流程 (如果是组，则返回的是组下面的全部流程ID)

## 基础用法

```vue
<template>
  <cx-proc-select :value="''" @onChange="onChange"/>
</template>

<script>
export default {
  methods: {
    onChange(value) {
      console.log('value数据项:', value);
    }
  }
}
</script>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| size | 尺寸 | String | large / default /small | default |
| value | 传递给组件的流程编码 | `String<value>` | | |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ----- | ----- | ----- | -----------------|
| onChange | 当前选择发生变化 | (value) | value数据项 |

## 类型定义

```ts
export interface ProcSelectProps {
  /**
   * 尺寸
   * @default default
   */
  size?: 'large' | 'default' | 'small';

  /**
   * 传递给组件的流程编码
   * @required
   */
  value: string;
} 