# 按钮

`cx-button` 基于 el-button 按钮。

## 基础用法

```vue
<template>
  <div>
    <cx-button icon="cx-fi ic-department"> 测试 </cx-button>
    <cx-button icon="cx-fi ic-department" type="danger"> 测试 </cx-button>
  </div>
</template>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| --- | ---- | ---- | ----- | ----- |
| size | 尺寸 | String | large / default /small | default |
| icon | 图标样式 | String | | |
| type | 类型（参见 el-button 的 type） | String | | |
| disabled | 是否禁能 | Boolean | | false |
| el-atts | 传递给 el-button 的属性 | Object | | |

## 插槽

| 名称 | 描述 | 参数 |
| ---- | --- | --- |
| default | 默认插槽 | |

