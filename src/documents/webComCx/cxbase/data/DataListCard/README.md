# 数据键值列卡片

`cx-data-list-card` 以键值对形式列表展示属性数据，常用于展示监测实时数据。

## 基础用法

使用 `data` 属性传入键值对数据，可以通过 `closeable` 控制是否可关闭，通过各种 style 属性自定义样式。

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| data | 属性数据，键值对 | Object | | |
| closeable | 是否可关闭，默认可关闭 | Boolean | true / false | true |
| mainStyle | 卡片主体样式 | Object | | |
| headStyle | 卡片头部部分样式 | Object | | |
| sectionStyle | 卡片中间部分样式 | Object | | |
| footerStyle | 卡片底部部分样式 | Object | | |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ----- | ----- | ----- | -------------|
| close | 关闭 | (context) | (context) |

## 插槽

| 名称 | 描述 | 参数 |
| ---- | --- | --- |
| default | 内容部分，自定义内容样式 | |
| header | 头部插槽 | |
| footer | 末尾插槽 | |

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

/** 数据项值类型 */
type DataValue = string | number | boolean | null | undefined;

/** 数据项接口 */
interface DataItem {
  /** 数据项键名 */
  key: string;
  /** 数据项值 */
  value: DataValue;
  /** 数据项单位 */
  unit?: string;
  /** 数据项描述 */
  description?: string;
  /** 数据项状态 */
  status?: 'normal' | 'warning' | 'error';
  /** 数据项更新时间 */
  updateTime?: string | Date;
}

/** 卡片主体样式接口 */
interface MainStyle extends BaseStyle {
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
}

/** 卡片头部样式接口 */
interface HeadStyle extends BaseStyle {
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
  /** 边框样式 */
  borderBottom?: string;
}

/** 卡片内容区样式接口 */
interface SectionStyle extends BaseStyle {
  /** 列表样式 */
  listStyle?: 'none' | 'disc' | 'circle' | 'square';
  /** 网格布局 */
  display?: 'grid';
  /** 网格列数 */
  gridTemplateColumns?: string;
  /** 网格行数 */
  gridTemplateRows?: string;
  /** 网格间距 */
  gap?: string | number;
  /** 内容溢出处理 */
  overflow?: 'hidden' | 'auto' | 'scroll';
}

/** 卡片底部样式接口 */
interface FooterStyle extends BaseStyle {
  /** 文字颜色 */
  color?: string;
  /** 字体大小 */
  fontSize?: string | number;
  /** 文本对齐方式 */
  textAlign?: 'left' | 'center' | 'right';
  /** 边框样式 */
  borderTop?: string;
}

/** 关闭事件上下文接口 */
interface CloseContext {
  /** 事件类型 */
  type: 'close';
  /** 事件时间戳 */
  timestamp: number;
  /** 卡片数据 */
  data: Record<string, DataValue>;
  /** 事件源元素 */
  target: HTMLElement;
}

/** 数据列表卡片组件属性接口 */
interface DataListCardProps {
  /** 属性数据，键值对 */
  data: Record<string, DataValue>;
  /** 是否可关闭，默认可关闭 */
  closeable?: boolean;
  /** 卡片主体样式 */
  mainStyle?: MainStyle;
  /** 卡片头部部分样式 */
  headStyle?: HeadStyle;
  /** 卡片中间部分样式 */
  sectionStyle?: SectionStyle;
  /** 卡片底部部分样式 */
  footerStyle?: FooterStyle;
}

/** 组件事件处理器接口 */
interface ComponentHandlers {
  /** 关闭事件处理器 */
  onClose?: (context: CloseContext) => void;
}
```