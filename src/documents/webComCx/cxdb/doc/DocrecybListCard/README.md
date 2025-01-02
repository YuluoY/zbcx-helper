# 文档回收站卡片列表

`cx-docrecyb-list-card` 文档列表管理 (cx-docrecyb)

## 基础用法

```vue
<template>
  <cx-docrecyb-list-card
    :files="files"
    :size="'default'"
    :card-com="'cx-docrecyb-card'"
    @row-remove="handleRemove"
  >
  </cx-docrecyb-list-card>
</template>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| --- | ---- | ---- | ----- | ----- |
| size | 尺寸 | String | small / default / large | default |
| files | 文件信息列表（cx_docrecyb） | Array | | |
| card-com | 文档卡片组件名 | String | | cx-docrecyb-card |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ---- | --- | ---- | ----- |
| row-remove | 删除某行（UI层删除） | (selected) | 当前选择项 |

## 类型定义

```ts
/** 文档回收站卡片列表组件Props */
interface DocrecybListCardProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 文件信息列表（cx_docrecyb） */
  files?: Array<any>;
  /** 文档卡片组件名 */
  cardCom?: string;
} 
```