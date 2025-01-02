# 焦点文本

`cx-focus-text` 焦点文本组件，具有以下特性：
* 单位支持上下角标 `<sub>` `<sup>`
* 支持调整图标和文字的相对位置
* 支持调整图标大小
* 支持调整文字顺序

## 基础用法

使用 `focus`、`topic` 和 `unit` 定义文本内容，通过 `cfg` 配置图标位置和样式。

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| size | UI规格 | String | large / default /small | default |
| color | 色系 | String | | |
| icon | 图标类名 | String | | |
| focus | 焦点文本 | String | | |
| topic | 主题文本 | String | | |
| unit | 单位 | String | | |
| cfg | 配置信息 | Object | | |

## cfg 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| iconPosition | 图标位置 | String | left / right / top / bottom / center | left |
| iconWidth | 图标宽度 | String | | |
| iconHeight | 图标高度 | String | | |
| textOrder | 文本显示顺序 | Number | 0-先显示焦点 1-先显示主题 | 0 |
| iconStyle | 样式-图标 | Object | | |
| focusStyle | 样式-焦点文本 | Object | | |
| topicStyle | 样式-主题文本 | Object | | |
| unitStyle | 样式-单位文本 | Object | | |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ----- | ----- | ---- | ----- |
| click | 点击事件 | | |

## 类型定义

以下是组件的 TypeScript 类型定义：

```ts
/** 组件尺寸类型 */
type ComponentSize = 'large' | 'default' | 'small';

/** 图标位置类型 */
type IconPosition = 'left' | 'right' | 'top' | 'bottom' | 'center';

/** 文本顺序类型 */
type TextOrder = 0 | 1;

/** 基础样式接口 */
interface BaseStyle {
  /** 宽度 */
  width?: string | number;
  /** 高度 */
  height?: string | number;
  /** 内边距 */
  padding?: string | number;
  /** 外边距 */
  margin?: string | number;
  /** 背景色 */
  background?: string;
  /** 边框 */
  border?: string;
  /** 边框圆角 */
  borderRadius?: string | number;
  /** 阴影 */
  boxShadow?: string;
}

/** 文本样式接口 */
interface TextStyle extends BaseStyle {
  /** 文字颜色 */
  color?: string;
  /** 字体大小 */
  fontSize?: string | number;
  /** 字体粗细 */
  fontWeight?: string | number;
  /** 行高 */
  lineHeight?: string | number;
  /** 文本对齐方式 */
  textAlign?: 'left' | 'center' | 'right';
  /** 文本装饰 */
  textDecoration?: 'none' | 'underline' | 'line-through';
  /** 文本溢出处理 */
  textOverflow?: 'ellipsis' | 'clip';
  /** 空白处理 */
  whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line';
}

/** 图标样式接口 */
interface IconStyle extends BaseStyle {
  /** 图标颜色 */
  color?: string;
  /** 图标大小 */
  fontSize?: string | number;
  /** 旋转角度 */
  transform?: string;
  /** 透明度 */
  opacity?: number;
  /** 过渡效果 */
  transition?: string;
  /** 动画效果 */
  animation?: string;
}

/** 配置项接口 */
interface FocusTextConfig {
  /** 图标位置 */
  iconPosition?: IconPosition;
  /** 图标宽度 */
  iconWidth?: string | number;
  /** 图标高度 */
  iconHeight?: string | number;
  /** 文本显示顺序 */
  textOrder?: TextOrder;
  /** 图标样式 */
  iconStyle?: IconStyle;
  /** 焦点文本样式 */
  focusStyle?: TextStyle;
  /** 主题文本样式 */
  topicStyle?: TextStyle;
  /** 单位文本样式 */
  unitStyle?: TextStyle;
  /** 容器样式 */
  containerStyle?: BaseStyle & {
    /** 弹性布局方向 */
    flexDirection?: 'row' | 'column';
    /** 弹性布局对齐方式 */
    alignItems?: 'flex-start' | 'center' | 'flex-end';
    /** 弹性布局内容分布 */
    justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
    /** 弹性布局换行 */
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    /** 弹性布局间距 */
    gap?: string | number;
  };
}

/** 焦点文本组件属性接口 */
interface FocusTextProps {
  /** 组件尺寸 */
  size?: ComponentSize;
  /** 主题色系 */
  color?: string;
  /** 图标类名 */
  icon?: string;
  /** 焦点文本 */
  focus: string;
  /** 主题文本 */
  topic?: string;
  /** 单位文本 */
  unit?: string;
  /** 配置信息 */
  cfg?: FocusTextConfig;
}

/** 组件事件处理器接口 */
interface ComponentHandlers {
  /** 点击事件处理器 */
  onClick?: (event: MouseEvent) => void;
  /** 鼠标进入事件处理器 */
  onMouseEnter?: (event: MouseEvent) => void;
  /** 鼠标离开事件处理器 */
  onMouseLeave?: (event: MouseEvent) => void;
  /** 焦点获取事件处理器 */
  onFocus?: (event: FocusEvent) => void;
  /** 焦点失去事件处理器 */
  onBlur?: (event: FocusEvent) => void;
}

/** 组件实例接口 */
interface ComponentInstance {
  /** 组件根元素 */
  $el: HTMLElement;
  /** 组件属性 */
  props: FocusTextProps;
  /** 更新焦点文本 */
  updateFocus: (text: string) => void;
  /** 更新主题文本 */
  updateTopic: (text: string) => void;
  /** 更新单位文本 */
  updateUnit: (text: string) => void;
  /** 更新配置 */
  updateConfig: (config: Partial<FocusTextConfig>) => void;
}
```