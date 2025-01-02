# 文档回收站卡片

`cx-docrecyb-card` 文档回收站卡片（基于 cx_docrecyb 表）

## 基础用法

```vue
<template>
  <cx-docrecyb-card
    :file="file"
  >
  </cx-docrecyb-card>
</template>

<script>
export default {
  data() {
    return {
      file: { filename: '测试.jpg', filelength: '1000' }
    }
  }
}
</script>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| --- | ---- | ---- | ----- | ----- |
| size | 尺寸 | String | small / default / large | default |
| file | cx_docrecyb | Object | | |
| border-com | 边框组件名（边框和底纹） | String | | cx-border-regular |
| border | 边框样式 | Object | | |
| content | 内容区样式 | Object | | |
| info | 信息区样式 | Object | | |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ---- | --- | ---- | ----- |
| row-remove | 删除某行（UI层删除） | (selected) | 当前选择项 |

## 类型定义

```ts
/** 文档回收站卡片组件Props */
interface DocrecybCardProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** cx_docrecyb */
  file?: object;
  /** 边框组件名（边框和底纹） */
  borderCom?: string;
  /** 边框样式 */
  border?: object;
  /** 内容区样式 */
  content?: object;
  /** 信息区样式 */
  info?: object;
} 
```