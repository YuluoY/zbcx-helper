# 命令-Save

`cx-cmd-save` 按钮 - Save。

## 基础用法

```vue
<style lang="scss" scoped></style>
<template>
  <cx-cmd-save />
</template>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| size | 尺寸 | String | large / default /small | default |
| disabled-save | 是否禁止 Save 按钮 | Boolean | | false |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ----- | ----- | ----- | ----- |
| ok-click | 点击 Save 按钮 | function() | |

## 插槽

| 名称 | 描述 | 参数 |
| ---- | --- | --- |
| preappend | 按钮之前 | |
| append | 按钮之后 | |
