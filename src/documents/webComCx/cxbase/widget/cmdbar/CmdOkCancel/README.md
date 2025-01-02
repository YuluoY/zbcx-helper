# 命令-Ok/Cancel

`cx-cmd-ok-cancel` 按钮 - Ok/Cancel。

## 基础用法

```vue
<style lang="scss" scoped></style>

<template>
  <cx-cmd-ok-cancel />
</template>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| size | 尺寸 | String | large / default /small | default |
| disabled-ok | 是否禁止 - Ok 按钮 | Boolean | | false |
| disabled-cancel | 是否禁止 - Cancel 按钮 | Boolean | | false |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ----- | ----- | ----- | ----- |
| ok-click | 点击 Ok 按钮 | Function() | |
| cancel-click | 点击 Cancel 按钮 | Function() | |

## 插槽

| 名称 | 描述 | 参数 |
| ---- | --- | --- |
| preappend | 按钮之前 | |
| append | 按钮之后 | |
