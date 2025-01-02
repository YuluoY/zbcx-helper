# 操作项

`cx-oper-item` 操作组`cx-oper-group`的每个操作项，基于 cx-button 按钮。

## 基础用法

```vue
<template>
  <cx-oper-item
    :oper="operConfig"
    :args="args"
    @click="onClick"
  />
</template>

<script>
export default {
  data() {
    return {
      operConfig: {
        title: '操作',
        icon: 'cx-fi ic-edit',
        type: 'primary',
        onClick: this.handleClick
      },
      args: []
    }
  },
  methods: {
    handleClick() {
      // 点击处理
    },
    onClick(oper, args) {
      // 点击事件处理
    }
  }
}
</script>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| --- | ---- | ---- | ----- | ----- |
| size | 尺寸 | String | large / default /small | default |
| oper | 操作配置 | OperCfg | | |
| args | 传递给操作的参数（如表格里面的每一行数据） | Array | | |
| plugin-state | 计算插件的状态(visible,disabled) | Function(plug,args) | | |
| el-atts | 传递给 el-button 的属性 | Object | | |

## OperCfg 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| --- | ---- | ---- | ----- | ----- |
| title | 标题 | String | | |
| icon | 图标 | String | | |
| show | 是否可见 | Boolean / Function(...args) | | true |
| enable | 是否使能 | Boolean / Function(...args) | | true |
| type | 按钮类型（参见 el-button 的 type） | String | | |
| showTitle | 是否显示标题 | Boolean | | true |
| showIcon | 是否显示图标 | Boolean | | true |
| onClick | 点击响应函数（onClick与plugin必须二选一） | Function(...args) | | |
| plugin | 点击运行的插件名称（onClick与plugin必须二选一） | String | | |
| uicfg | 配置信息 | Object | | |
| uicfg.button | 按钮配置信息（参见 el-button 的属性） | Object | | |
| uicfg.divided | 是否在上方方显示分隔条 | Boolean | | false |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ---- | --- | ---- | ----- |
| click | 点击操作 | (oper, args) | 操作配置, 传递给该组件的参数 |

## 插槽

| 名称 | 描述 | 参数 |
| ---- | --- | --- |
| default | 默认插槽 | |
