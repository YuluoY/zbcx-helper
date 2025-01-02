# 百分比进度条

`cx-progress-tb` 百分比进度条组件。

## 基础用法

使用 `percentage` 属性表示进度值，`color` 属性设置进度条颜色。

## 不同位置

通过 `position` 设置进度条位置，可选值：top / overlap / bottom。

## 自定义样式

可以通过 `stroke-width`、`width`、`text-style` 等属性自定义进度条样式。

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| -----| --- | -----| --- | ---- |
| size | 尺寸 | String | | |
| color | 色系 | String | | |
| position | 位置 | String | top / overlap / bottom | overlap |
| percentage | 进度 | String | | |
| stroke-width | 进度条宽度（上下高度） | String | | 6 |
| bg-width | 进度条背景宽度（上下高度） | String | | 6 |
| width | 进度条宽度 | String | | 150 |
| show-text | 是否显示进度条文字内容 | Boolean | | true |
| text-style | 文本样式 | String | | |
| format | 指定进度条文字内容 | Function(percentage) | | |

## 类型定义

```ts
export interface ProgressTbProps {
  /** 尺寸 */
  size?: string;
  /** 色系 */
  color?: string;
  /** 位置 */
  position?: 'top' | 'overlap' | 'bottom';
  /** 进度 */
  percentage?: string | number;
  /** 进度条宽度（上下高度） */
  strokeWidth?: string | number;
  /** 进度条背景宽度（上下高度） */
  bgWidth?: string | number;
  /** 进度条宽度 */
  width?: string | number;
  /** 是否显示进度条文字内容 */
  showText?: boolean;
  /** 文本样式 */
  textStyle?: string | Record<string, any>;
  /** 指定进度条文字内容 */
  format?: (percentage: number) => string;
}
```

