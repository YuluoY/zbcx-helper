# 流程步骤进度

`cx-progress-step` 流程步骤组件（带图标）列表

* 1.单流程步骤，支持图标、下方标题、头部标题、分隔线上文本等
* 2.支持自定义头部内容
* 3.支持自定义分割线上内容
* 4.支持自定义底部内容。

## 基础用法

使用 `title`、`icon` 等属性设置步骤的基本信息，使用插槽自定义各个部分的内容。

## 自定义样式

通过 `titleStyle`、`iconStyle`、`dividerTitleStyle` 等样式属性自定义各个部分的样式。

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| -----| --- | -----| --- | ---- |
| title | 标题文本 | String | | |
| titleStyle | 标题文本样式 | String | | |
| icon | 图标类名（使用我们自己图标库中的图标名） | String | | |
| iconStyle | 图标样式 | String | | |
| dividerTitle | 分割线上的文本 | String | | |
| dividerTitleStyle | 分隔线上文本样式 | String | | |
| showLine | 是否显示分割线 | Boolean | | |
| mainColor | 主题色，会应用到头部标题、图标、底部标题、分割线文本 | String | | |

## 插槽

| 名称 | 说明 | 参数 |
| ---- | --- | --- |
| top | 头部插槽 | |
| icon | 图标位置插槽 | |
| dividertitle | 分割线文本插槽 | |
| title | 底部标题插槽 | |

## 类型定义

```ts
export interface ProgressStepProps {
  /** 标题文本 */
  title?: string;
  /** 标题文本样式 */
  titleStyle?: string;
  /** 图标类名（使用我们自己图标库中的图标名） */
  icon?: string;
  /** 图标样式 */
  iconStyle?: string;
  /** 分割线上的文本 */
  dividerTitle?: string;
  /** 分隔线上文本样式 */
  dividerTitleStyle?: string;
  /** 是否显示分割线 */
  showLine?: boolean;
  /** 主题色，会应用到头部标题、图标、底部标题、分割线文本 */
  mainColor?: string;
}
```
