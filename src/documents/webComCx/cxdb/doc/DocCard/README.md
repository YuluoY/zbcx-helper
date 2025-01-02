# 文档卡片

`cx-doc-card` 文档卡片（基于cx_media表）

## 基础用法

```vue
<template>
  <cx-doc-card
    :file="file"
    :opers="opers"
  >
  </cx-doc-card>
</template>

<script>
export default {
  data() {
    return {
      file: { filename: '测试.jpg', filelength: '1000' },
      opers: []
    }
  },

  created() {
    const icon = cx.config.icon

    this.opers = [
      { title: this.$locBase('upload'), show: () => true, icon: icon.upload, onClick: this.onTest, style: 'margin-right:.12rem' },
      { title: this.$locBase('del'), show: true, icon: icon.del, onClick: this.onTest },
      { title: this.$locBase('edit'), show: true, icon: icon.edit, onClick: this.onTest }
    ]
  }
}
</script>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| --- | ---- | ---- | ----- | ----- |
| size | 尺寸 | String | small / default / large | default |
| **file** | 文件信息（cx_media） | Object | | |
| **opers** | 操作数组（参见 cx-oper-item） | `Array.<OperItem>` | | |
| **oper-cfg** | 操作项设置 | OperCfg | | |
| multiple | 是否支持多选 | Boolean | | false |
| plugin-state | 计算插件的状态(visible,disabled) | Function(plug,args) | | |
| before-visible | 下拉菜单展开之前的操作 | Function(args) | | |
| border-com | 边框组件名（边框和底纹） | String | | cx-border-regular |
| border | 边框样式 | Object | | |
| content | 内容区样式 | Object | | |
| info | 信息区样式 | Object | | |

## OperCfg 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| --- | ---- | ---- | ----- | ----- |
| show-title | 是否显示标题 | Boolean | | true |
| show-icon | 是否显示图标 | Boolean | | true |
| icon-dropdown | 下拉图标 | String | | |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ---- | --- | ---- | ----- |
| row-click | 点击 | (args) | 操作配置, 传递给该组件的参数 |
| plugin-click | 点击操作 | (oper, args) | 操作配置, 传递给该组件的参数 |
| check-change | 点击复选框 | (args, checked) | 传递给该组件的参数, 是否选中 |
| row-remove | 删除某行（UI层删除） | (selected) | 当前选择项 |

## 插槽
| 名称 | 描述 | 参数 |
| ----- | ----- | ----- |
| info | 文档信息 | |
| cmdbar | 命令条 | |

## 类型定义

```ts
/** 操作项配置 */
export interface OperCfg {
  /** 是否显示标题 */
  showTitle?: boolean;
  /** 是否显示图标 */
  showIcon?: boolean;
  /** 下拉图标 */
  iconDropdown?: string;
}

/** 操作项 */
export interface OperItem {
  /** 标题 */
  title: string;
  /** 是否显示 */
  show: boolean | (() => boolean);
  /** 图标 */
  icon: string;
  /** 点击事件 */
  onClick: () => void;
  /** 样式 */
  style?: string;
}

/** 文档卡片组件Props */
export interface DocCardProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 文件信息（cx_media） */
  file: object;
  /** 操作数组（参见 cx-oper-item） */
  opers: OperItem[];
  /** 操作项设置 */
  operCfg?: OperCfg;
  /** 是否支持多选 */
  multiple?: boolean;
  /** 计算插件的状态(visible,disabled) */
  pluginState?: (plug: any, args: any) => void;
  /** 下拉菜单展开之前的操作 */
  beforeVisible?: (args: any) => void;
  /** 边框组件名（边框和底纹） */
  borderCom?: string;
  /** 边框样式 */
  border?: object;
  /** 内容区样式 */
  content?: object;
  /** 信息区样式 */
  info?: object;
} 