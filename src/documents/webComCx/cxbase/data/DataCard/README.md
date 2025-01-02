# 数据卡片

`cx-data-card` 数据卡片组件，用于统计数据展示。

## 基础用法

使用 `label`、`value` 和 `unit` 定义卡片的基本内容。

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| **label** | 卡片标题 | String | | |
| **value** | 卡片数值 | String | | |
| **unit** | 卡片数值的单位 | String | | |
| cardStyle | 卡片样式 | Object | | |
| titleStyle | 标题样式 | Object | | |
| valueStyle | 数值样式 | Object | | |
| iconStyle | 图标图片样式 | Object | | |
| unitStyle | 卡片数值的单位样式 | Object | | |

## 插槽

| 名称 | 描述 | 参数 |
| ---- | --- | --- |
| unit | 单位插槽，默认使用传入的单位字符串 | |
| icon | 图标插槽，默认使用传入的图标串 | |
| footer | 底部插槽，默认使用传入的字符串 | |

## 类型定义

以下是组件的 TypeScript 类型定义：

```ts
/** 基础样式属性接口 */
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
  /** 背景图片 */
  backgroundImage?: string;
  /** 边框 */
  border?: string;
  /** 边框圆角 */
  borderRadius?: string | number;
  /** 阴影 */
  boxShadow?: string;
}

/** 文本样式属性接口 */
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
  /** 字体族 */
  fontFamily?: string;
}

/** 图标样式属性接口 */
interface IconStyle extends BaseStyle {
  /** 图标大小 */
  size?: string | number;
  /** 图标颜色 */
  color?: string;
  /** 旋转角度 */
  rotate?: number;
  /** 透明度 */
  opacity?: number;
}

/** 卡片组件属性接口 */
interface DataCardProps {
  /** 卡片标题 */
  label: string;
  /** 卡片数值 */
  value: string;
  /** 卡片数值的单位 */
  unit: string;
  /** 卡片样式 */
  cardStyle?: BaseStyle & {
    /** 弹性布局 */
    display?: 'flex';
    /** 弹性布局方向 */
    flexDirection?: 'row' | 'column';
    /** 弹性布局对齐方式 */
    alignItems?: 'flex-start' | 'center' | 'flex-end';
    /** 弹性布局内容分布 */
    justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
    /** 溢出处理 */
    overflow?: 'hidden' | 'auto' | 'scroll';
    /** 定位方式 */
    position?: 'relative' | 'absolute' | 'fixed';
    /** 层级 */
    zIndex?: number;
  };
  /** 标题样式 */
  titleStyle?: TextStyle & {
    /** 标题特殊样式 */
    textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
    /** 文本装饰 */
    textDecoration?: 'none' | 'underline' | 'line-through';
    /** 文本溢出处理 */
    textOverflow?: 'ellipsis' | 'clip';
    /** 空白处理 */
    whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line';
  };
  /** 数值样式 */
  valueStyle?: TextStyle & {
    /** 数值特殊样式 */
    letterSpacing?: string | number;
    /** 数值变化过渡效果 */
    transition?: string;
  };
  /** 图标图片样式 */
  iconStyle?: IconStyle & {
    /** 图标位置 */
    position?: 'left' | 'right' | 'top' | 'bottom';
    /** 图标与文本间距 */
    gap?: string | number;
    /** 图标容器样式 */
    wrapper?: BaseStyle;
  };
  /** 卡片数值的单位样式 */
  unitStyle?: TextStyle & {
    /** 单位位置 */
    position?: 'before' | 'after';
    /** 单位与数值间距 */
    gap?: string | number;
  };
}

/** 事件参数接口 */
interface CardEventParams {
  /** 事件类型 */
  type: 'click' | 'hover' | 'focus';
  /** 卡片标题 */
  label: string;
  /** 卡片数值 */
  value: string;
  /** 卡片单位 */
  unit: string;
  /** 事件时间戳 */
  timestamp: number;
  /** 事件源元素 */
  target: HTMLElement;
}
```