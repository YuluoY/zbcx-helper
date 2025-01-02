# 进度条电池

`cx-progress-battery` 进度条组件。

## 基础用法

使用 `percentage` 属性表示进度值，`color` 属性设置进度条颜色。

## 不同尺寸

通过 `size` 设置组件尺寸，可选值：large / default / small。

## 自定义样式

可以通过 `stroke-width`、`width`、`text-style` 等属性自定义进度条样式。

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| -----| --- | -----| --- | ---- |
| size | UI规格 | String | | |
| percentage | 进度 | Number | | |
| stroke-width | 进度条宽度（上下高度） | String | | 24 |
| width | 进度条宽度 | String | | 150 |
| color | 色系 | String | | |
| show-text | 是否显示进度条文字内容 | Boolean | | true |
| text-style | 文本样式 | String | | |
| format | 指定进度条文字内容 - Function(percentage) | Function | | |

## 类型定义

```ts
export interface ProgressBatteryProps {
  /** UI规格 */
  size?: string;
  /** 进度 */
  percentage?: number;
  /** 进度条宽度（上下高度） */
  strokeWidth?: string | number;
  /** 进度条宽度 */
  width?: string | number;
  /** 色系 */
  color?: string;
  /** 是否显示进度条文字内容 */
  showText?: boolean;
  /** 文本样式 */
  textStyle?: string | Record<string, any>;
  /** 指定进度条文字内容 */
  format?: (percentage: number) => string;
}
```

