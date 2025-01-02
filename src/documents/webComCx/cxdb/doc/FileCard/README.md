# 文件卡片

`cx-file-card` 文件卡片（基于文件系统）

## 基础用法

```vue
<template>
  <cx-file-card
    :size="'default'"
    :file="{}"
    :opers="[]"
    :oper-cfg="{
      showTitle: true,
      showIcon: true
    }"
    :multiple="false"
    :plugin-state="(plug, args) => {}"
    :before-visible="(args) => {}"
    :border-com="'cx-border-regular'"
    :border="{}"
    :content="{}"
    :info="{}"
    @row-click="(args) => {}"
    @plugin-click="(oper, args) => {}"
    @check-change="(args, checked) => {}"
  >
    <template #info>
      <!-- 文档信息 -->
    </template>
    <template #cmdbar>
      <!-- 命令条 -->
    </template>
  </cx-file-card>
</template>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| --- | ---- | ---- | ----- | ----- |
| size | 尺寸 | String | small / default / large | default |
| file | 文件信息（文件系统） | Object | | |
| opers | 操作数组（参见 cx-oper-item） | `Array.<OperItem>` | | |
| oper-cfg | 操作项设置 | OperCfg | | |
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
| row-click | 点击 | (args) => void | 操作配置, 传递给该组件的参数 |
| plugin-click | 点击操作 | (oper, args) => void | 操作配置, 传递给该组件的参数 |
| check-change | 点击复选框 | (args, checked) => void | 传递给该组件的参数, 是否选中 |

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

/** 文件卡片组件Props */
export interface FileCardProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 文件信息（文件系统） */
  file: Record<string, any>;
  /** 操作数组（参见 cx-oper-item） */
  opers: any[];
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
  border?: Record<string, any>;
  /** 内容区样式 */
  content?: Record<string, any>;
  /** 信息区样式 */
  info?: Record<string, any>;
  /** 点击 */
  onRowClick?: (args: any) => void;
  /** 点击操作 */
  onPluginClick?: (oper: any, args: any) => void;
  /** 点击复选框 */
  onCheckChange?: (args: any, checked: boolean) => void;
} 