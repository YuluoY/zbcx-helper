# 数据概述

`cx-data-sketch` 以列表的形式在一行内用复杂结构展示数据信息。

## 基础用法

使用 `title`、`imgUrl`、`tags` 和 `describe` 定义数据内容，可以通过 `imgRow` 和 `isBigImg` 控制图片的展示方式。

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| title | 数据标题 | String | | |
| imgRow | 图片是否横向模式，true在独占一列 | Boolean | true/false | true |
| isBigImg | 是否大图片模式，true在独占一行或一列 | Boolean | true/false | true |
| imgUrl | 默认展示的图片地址 | String | | |
| tags | 数据的标签，TagCfg 配置详情见 el-tag | Array.<TagCfg> | | |
| describe | 数据概述 | String | | |
| wordNum | 展示的概述文字数量，超出部分省略 | Number | | 80 |

## TagCfg 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| type | Tag 的类型 | String | success / info / warning /danger / '' | '' |
| closable | 是否可关闭 | Boolean | true / false | false |
| disable-transitions | 是否禁用渐变动画 | Boolean | true / false | false |
| hit | 是否有边框描边 | Boolean | true / false | false |
| color | 背景色 | String | | light |
| size | Tag 的尺寸 | String | large / default / small / '' | '' |
| effect | Tag 的主题 | String | dark / light / plain | light |
| round | Tag 是否为圆形 | Boolean | true / false | false |

## 插槽

| 名称 | 描述 | 参数 |
| ---- | --- | --- |
| body | 内容部分插槽 | |
| header | 头部插槽 | |
| header-content | 头部插槽下一行内容 | |

## 类型定义

以下是组件的 TypeScript 类型定义：

```ts
/** 标签类型 */
type TagType = 'success' | 'info' | 'warning' | 'danger' | '';

/** 标签尺寸 */
type TagSize = 'large' | 'default' | 'small' | '';

/** 标签主题 */
type TagEffect = 'dark' | 'light' | 'plain';

/** 标签配置接口 */
interface TagConfig {
  /** 标签文本 */
  text: string;
  /** 标签类型 */
  type?: TagType;
  /** 是否可关闭 */
  closable?: boolean;
  /** 是否禁用渐变动画 */
  disableTransitions?: boolean;
  /** 是否有边框描边 */
  hit?: boolean;
  /** 背景色 */
  color?: string;
  /** 标签尺寸 */
  size?: TagSize;
  /** 标签主题 */
  effect?: TagEffect;
  /** 是否圆形 */
  round?: boolean;
  /** 关闭事件处理器 */
  onClose?: (event: Event) => void;
  /** 点击事件处理器 */
  onClick?: (event: Event) => void;
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: Record<string, string | number>;
}

/** 图片配置接口 */
interface ImageConfig {
  /** 图片地址 */
  url: string;
  /** 图片标题 */
  title?: string;
  /** 图片描述 */
  alt?: string;
  /** 图片宽度 */
  width?: string | number;
  /** 图片高度 */
  height?: string | number;
  /** 图片填充模式 */
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
  /** 是否懒加载 */
  lazy?: boolean;
  /** 加载失败时显示的图片 */
  fallback?: string;
  /** 预览时的配置项 */
  previewOptions?: {
    /** 是否可预览 */
    previewable?: boolean;
    /** 预览时的缩放选项 */
    zoomOptions?: {
      /** 最大缩放比例 */
      maxZoom?: number;
      /** 最小缩放比例 */
      minZoom?: number;
    };
  };
}

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

/** 数据概述组件属性接口 */
interface DataSketchProps {
  /** 数据标题 */
  title: string;
  /** 图片是否横向模式 */
  imgRow?: boolean;
  /** 是否大图片模式 */
  isBigImg?: boolean;
  /** 图片地址或配置 */
  imgUrl: string | ImageConfig;
  /** 标签配置数组 */
  tags?: TagConfig[];
  /** 数据概述 */
  describe?: string;
  /** 概述文字数量限制 */
  wordNum?: number;
  /** 标题样式 */
  titleStyle?: TextStyle;
  /** 描述样式 */
  describeStyle?: TextStyle;
  /** 标签容器样式 */
  tagsStyle?: BaseStyle;
  /** 图片容器样式 */
  imageStyle?: BaseStyle;
  /** 根容器样式 */
  containerStyle?: BaseStyle & {
    /** 弹性布局方向 */
    flexDirection?: 'row' | 'column';
    /** 弹性布局对齐方式 */
    alignItems?: 'flex-start' | 'center' | 'flex-end';
    /** 弹性布局内容分布 */
    justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
  };
}

/** 组件事件处理器接口 */
interface ComponentHandlers {
  /** 标签关闭事件 */
  onTagClose?: (tag: TagConfig, index: number) => void;
  /** 标签点击事件 */
  onTagClick?: (tag: TagConfig, index: number) => void;
  /** 图片加载完成事件 */
  onImageLoad?: (event: Event) => void;
  /** 图片加载失败事件 */
  onImageError?: (event: Event) => void;
  /** 图片点击事件 */
  onImageClick?: (event: Event) => void;
}

/** 组件插槽数据接口 */
interface SlotData {
  /** 标题 */
  title: string;
  /** 描述 */
  describe: string;
  /** 标签列表 */
  tags: TagConfig[];
  /** 图片配置 */
  image: ImageConfig;
}
```
