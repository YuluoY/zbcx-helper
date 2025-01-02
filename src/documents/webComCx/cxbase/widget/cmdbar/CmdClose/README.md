# 命令-Close

`cx-cmd-close` 按钮 - Close。

## 基础用法

```vue
<style lang="scss" scoped></style>

<template>
  <cx-cmd-close />
</template>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| size | 尺寸 | String | large / default /small | default |
| disabled-close | 是否禁止 Close 按钮 | Boolean | | false |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ----- | ----- | ----- | ----- |
| cancel-click | 点击 Close 按钮 | function() | |

## 插槽

| 名称 | 描述 | 参数 |
| ---- | --- | --- |
| preappend | 按钮之前 | |
| append | 按钮之后 | |