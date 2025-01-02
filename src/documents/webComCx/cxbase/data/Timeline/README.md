# 时间线

`cx-timeline` 基于时间线展示数据信息。

## 基础用法

使用 `data` 属性传入时间线数据列表，每个数据项包含 `elAtts`、`name`、`component` 等属性。

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| **data** | 数据列表 | `Array.<ComItem>` | | [] |

## ComItem属性

每个时间线数据项的配置

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| **elAtts** | 每项是element-plus的Timeline-Item参数信息 | Object | | |
| **name** | 组件名称，data 序列中要唯一 | String | | |
| **component** | 内容组件对象，为空时无内容 | Component | | |
| params | 组件接收参数，v-bind的形式绑定到component | Object | | |
| evts | 组件绑定事件，v-on的形式绑定到component | Object | | |

## elAtts属性

常用属性如下，详情见 [el-timeline](https://element-plus.org/en-US/component/timeline.html#basic-usage)

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| timestamp | 时间戳 | String | | '' |
| hide-timestamp | 是否隐藏时间戳 | Boolean | | false |
| center | 是否垂直居中 | Boolean | | false |
| placement | 时间戳位置 | String | top/bottom | bottom |
| type | 节点类型 | String | primary/success/warning/danger/info | '' |
| color | 节点颜色 | String | hsl/hsv/hex/rgb | '' |
| size | 节点尺寸 | String | normal/large | normal |
| icon | 自定义图标 | String/Component | | |
| hollow | 是否空心点 | Boolean | | false |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ----- | ----- | ----- | ----- |
| click-item | 点击时间线响应 | (ComItem) | 当前时间线项 |

## 类型定义

以下是组件的 TypeScript 类型定义：

```ts
/** 节点类型 */
type NodeType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | '';

/** 节点尺寸 */
type NodeSize = 'normal' | 'large';

/** 时间戳位置 */
type TimestampPlacement = 'top' | 'bottom';

/** 颜色格式 */
type ColorFormat = 'hsl' | 'hsv' | 'hex' | 'rgb';

/** Element Timeline Item 属性接口 */
interface TimelineItemAttributes {
  /** 时间戳 */
  timestamp?: string;
  /** 是否隐藏时间戳 */
  hideTimestamp?: boolean;
  /** 是否垂直居中 */
  center?: boolean;
  /** 时间戳位置 */
  placement?: TimestampPlacement;
  /** 节点类型 */
  type?: NodeType;
  /** 节点颜色 */
  color?: string;
  /** 节点尺寸 */
  size?: NodeSize;
  /** 自定义图标 */
  icon?: string | Component;
  /** 是否空心点 */
  hollow?: boolean;
  /** 自定义类名 */
  class?: string | string[];
  /** 自定义样式 */
  style?: Record<string, string | number>;
}

/** 组件参数接口 */
interface ComponentParams {
  /** 标题 */
  title?: string;
  /** 内容 */
  content?: string;
  /** 其他参数 */
  [key: string]: any;
}

/** 组件事件处理器接口 */
interface ComponentEvents {
  /** 点击事件 */
  click?: (event: MouseEvent) => void;
  /** 鼠标进入事件 */
  mouseenter?: (event: MouseEvent) => void;
  /** 鼠标离开事件 */
  mouseleave?: (event: MouseEvent) => void;
  /** 其他事件 */
  [key: string]: ((event: Event) => void) | undefined;
}

/** 时间线项配置接口 */
interface TimelineItem {
  /** 组件名称，必须唯一 */
  name: string;
  /** Element Timeline Item 属性 */
  elAtts: TimelineItemAttributes;
  /** 内容组件 */
  component?: Component;
  /** 组件参数 */
  params?: ComponentParams;
  /** 组件事件 */
  evts?: ComponentEvents;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否可见 */
  visible?: boolean;
  /** 自定义数据 */
  data?: any;
}

/** 时间线组件属性接口 */
interface TimelineProps {
  /** 数据列表 */
  data: TimelineItem[];
  /** 是否反向排序 */
  reverse?: boolean;
  /** 是否显示时间戳 */
  showTimestamp?: boolean;
  /** 是否显示节点 */
  showNode?: boolean;
  /** 是否显示连接线 */
  showLine?: boolean;
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: Record<string, string | number>;
}

/** 点击事件参数接口 */
interface ClickItemEventParams {
  /** 时间线项 */
  item: TimelineItem;
  /** 项索引 */
  index: number;
  /** 事件对象 */
  event: MouseEvent;
}

/** 组件事件处理器接口 */
interface TimelineHandlers {
  /** 项点击事件 */
  onClickItem?: (params: ClickItemEventParams) => void;
  /** 时间戳点击事件 */
  onTimestampClick?: (item: TimelineItem, event: MouseEvent) => void;
  /** 节点点击事件 */
  onNodeClick?: (item: TimelineItem, event: MouseEvent) => void;
}

/** 组件实例接口 */
interface TimelineInstance {
  /** 组件根元素 */
  $el: HTMLElement;
  /** 组件属性 */
  props: TimelineProps;
  /** 获取时间线项 */
  getItem: (name: string) => TimelineItem | undefined;
  /** 更新时间线项 */
  updateItem: (name: string, item: Partial<TimelineItem>) => void;
  /** 添加时间线项 */
  addItem: (item: TimelineItem, index?: number) => void;
  /** 移除时间线项 */
  removeItem: (name: string) => void;
  /** 清空时间线 */
  clear: () => void;
  /** 滚动到指定项 */
  scrollToItem: (name: string, options?: ScrollIntoViewOptions) => void;
}
```