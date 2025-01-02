# 操作组

`cx-oper-group` 显示部分操作，用下拉方式隐藏部分操作。

## 基础用法

```vue
<template>
  <cx-oper-group
    :opers="operItem"
    :max="5"
  />
</template>

<script>
export default {
  data() {
    return {
      operItem: []
    }
  },

  created() {
    const icon = cx.config.icon

    this.operItem = [
      { title: this.$locBase('upload'), show: () => true, icon: icon.upload, showTitle: false, onClick: this.onTest },
      { title: this.$locBase('upload'), show: () => true, icon: icon.upload, showIcon: false, onClick: this.onTest },
      { title: this.$locBase('upload'), show: () => true, icon: icon.upload, onClick: this.onTest },
      { title: this.$locBase('del'), show: true, icon: icon.del, type: "danger", onClick: this.onTest },
      { title: this.$locBase('edit'), show: true, icon: icon.edit, type: "text", onClick: this.onTest }
    ]    
  },

  methods: {
    onTest() {
      // 点击处理
    }
  }
}
</script>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| --- | ---- | ---- | ----- | ----- |
| size | 尺寸 | String | large / default /small | default |
| opers | 操作数组 | `Array.<OperCfg>` | | |
| args | 传递给操作的参数（如表格里面的每一行数据） | Array | | |
| max | 显示操作的最大数量 | Number | | 3 |
| dropdown | 用于下拉的按钮控制 | DropdownCfg | | |
| el-atts | 传递给 el-button 的属性 | Object | | |
| plugin-state | 计算插件的状态(visible,disabled) | Function(plug,args) | | |
| before-visible | 下拉菜单展开之前的操作 | Function(args) | | |

## OperCfg 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| --- | ---- | ---- | ----- | ----- |
| title | 标题 | String | | |
| icon | 图标 | String | | |
| show | 是否可见 | Boolean / Function(...args) | | true |
| enable | 是否使用 | Boolean / Function(...args) | | true |
| type | 按钮类型（参见 el-button 的 type） | String | | |
| showTitle | 是否显示标题 | Boolean | | true |
| showIcon | 是否显示图标 | Boolean | | true |
| onClick | 点击响应函数（onClick与plugin必须二选一） | Function(...args) | | |
| plugin | 点击运行的插件名称（onClick与plugin必须二选一） | String | | |
| uicfg | 配置信息 | Object | | |
| uicfg.button | 按钮配置信息（参见 el-button 的属性） | Object | | |
| uicfg.divided | 是否在上方方显示分隔条 | Boolean | | false |

## DropdownCfg 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| --- | ---- | ---- | ----- | ----- |
| iconDropdown | 下拉图标 | String | | |
| title | 标题 | String | | 词条-cx.base.more |
| icon | 图标 | String | | |
| showTitle | 是否显示标题 | Boolean | | true |
| showIcon | 是否显示图标 | Boolean | | true |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ---- | --- | ---- | ----- |
| click | 点击操作 | (oper, args) | 操作配置, 传递给该组件的参数 |

## 插槽

| 名称 | 描述 | 参数 |
| ---- | --- | --- |
| preappend | 前部插槽，在首按钮前 | |
| middle | 后部插槽，在末按钮和折叠按钮间 | |
| append | 后部插槽，在末按钮或折叠按钮后 | |

## 说明

max 之内的操作，采用 pluginState(oper,args) 确定状态
max 之外的操作，采用 before-visible(args)把结果放在visible, disabled 里面
