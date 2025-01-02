# 分组列表

`cx-grp-list` 分组列表，主要用于将列表进行分组展示。

## 基础用法

使用 `data` 属性传入列表数据，`title` 设置分组标题，可以通过 `size` 控制尺寸，`activeId` 设置当前激活项。

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ----- | ----- |
| size | 尺寸 | String | large / default /small | default |
| **data** | 数据传递 | `Array.<DataCfg>` | | [] |
| **title** | 标题 | String | | |
| icon | 图标 | String | | |
| activeId | 当前激活菜单id | String | | |

## DataCfg 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ----- | ----- |
| id | 数据唯一标识 | Number/String | | |
| title | 项显示文本 | String | | |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ---- | ---- | ---- | ----- |
| item-click | 点击 | (id, title) | id: 数据唯一标识,title: 项显示文本 |

## 插槽

| 名称 | 描述 | 参数 |
| ---- | --- | --- |
| default | 内容部分 | |

## 类型定义

以下是组件的 TypeScript 类型定义：

```ts
/** 组件尺寸类型 */
type ComponentSize = 'large' | 'default' | 'small';

/** 数据项标识类型 */
type ItemId = string | number;

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

/** 数据项配置接口 */
interface DataConfig {
  /** 数据唯一标识 */
  id: ItemId;
  /** 项显示文本 */
  title: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否可见 */
  visible?: boolean;
  /** 自定义图标 */
  icon?: string;
  /** 自定义样式 */
  style?: TextStyle;
  /** 额外数据 */
  extra?: Record<string, any>;
}

/** 分组列表组件属性接口 */
interface GrpListProps {
  /** 组件尺寸 */
  size?: ComponentSize;
  /** 列表数据 */
  data: DataConfig[];
  /** 分组标题 */
  title: string;
  /** 分组图标 */
  icon?: string;
  /** 当前激活项ID */
  activeId?: ItemId;
  /** 标题样式 */
  titleStyle?: TextStyle;
  /** 列表样式 */
  listStyle?: BaseStyle & {
    /** 列表项间距 */
    gap?: string | number;
    /** 列表最大高度 */
    maxHeight?: string | number;
    /** 溢出处理 */
    overflow?: 'hidden' | 'auto' | 'scroll';
  };
  /** 列表项样式 */
  itemStyle?: TextStyle & {
    /** 悬停样式 */
    hoverStyle?: TextStyle;
    /** 激活样式 */
    activeStyle?: TextStyle;
    /** 禁用样式 */
    disabledStyle?: TextStyle;
  };
}

/** 点击事件参数接口 */
interface ItemClickParams {
  /** 数据项ID */
  id: ItemId;
  /** 数据项标题 */
  title: string;
  /** 数据项完整配置 */
  item: DataConfig;
  /** 事件对象 */
  event: MouseEvent;
}

/** 组件事件处理器接口 */
interface ComponentHandlers {
  /** 项点击事件 */
  onItemClick?: (params: ItemClickParams) => void;
  /** 鼠标进入事件 */
  onMouseEnter?: (item: DataConfig, event: MouseEvent) => void;
  /** 鼠标离开事件 */
  onMouseLeave?: (item: DataConfig, event: MouseEvent) => void;
  /** 滚动事件 */
  onScroll?: (event: Event) => void;
}

/** 组件插槽数据接口 */
interface SlotData {
  /** 数据项 */
  item: DataConfig;
  /** 是否激活 */
  active: boolean;
  /** 是否禁用 */
  disabled: boolean;
}

/** 组件实例接口 */
interface ComponentInstance {
  /** 组件根元素 */
  $el: HTMLElement;
  /** 组件属性 */
  props: GrpListProps;
  /** 设置激活项 */
  setActiveItem: (id: ItemId) => void;
  /** 获取数据项 */
  getItem: (id: ItemId) => DataConfig | undefined;
  /** 更新数据项 */
  updateItem: (id: ItemId, config: Partial<DataConfig>) => void;
  /** 滚动到指定项 */
  scrollToItem: (id: ItemId, options?: ScrollIntoViewOptions) => void;
}
```