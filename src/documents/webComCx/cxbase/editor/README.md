# 编辑器

`cx-editor` 编辑器组件，具有以下特性：
* 支持富文本、Markdown和简单文本三种模式
* 支持自定义工具栏
* 支持明暗主题切换
* 支持多语言

## 基础用法

使用 `v-model` 进行双向数据绑定，通过 `type` 指定编辑器类型，通过 `cfg` 配置编辑器的外观和行为。

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| value | 编辑器值 | String | | |
| type | 编辑器类型 | String | rich / markdown / simple | rich |
| theme | 主题 | String | light / dark | light |
| lang | 语言 | String | | zh-CN |
| cfg | 配置信息 | Object | | |

## cfg 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| height | 编辑器高度 | String | | 400px |
| width | 编辑器宽度 | String | | 100% |
| readonly | 是否只读 | Boolean | | false |
| placeholder | 占位符文本 | String | | |
| toolbar | 工具栏配置 | Object | | |
| style | 样式配置 | Object | | |

### toolbar 配置

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| show | 是否显示工具栏 | Boolean | | true |
| items | 自定义工具栏项目 | Array | | [] |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ----- | ----- | ---- | ----- |
| change | 内容变化时触发 | value | 编辑器当前值 |
| focus | 获得焦点时触发 | | |
| blur | 失去焦点时触发 | | | 