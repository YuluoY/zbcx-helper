export interface DataItem {
  name: string;    // 横坐标轴标签名
  value: number;   // 每个圆柱对应的值
}

export interface GridConfig {
  show?: boolean;                  // 是否显示网格
  z?: number;                      // 层级值
  left?: string | number;          // 左边距
  top?: string | number;           // 上边距
  right?: string | number;         // 右边距
  bottom?: string | number;        // 下边距
  width?: string | number;         // 网格宽度
  height?: string | number;        // 网格高度
  borderColor?: string;            // 网格边框色
  backgroundColor?: string;        // 网格背景色
  borderWidth?: number;            // 网格边框宽度
}

export interface TooltipConfig {
  show?: boolean;                  // 是否显示提示组件
  trigger?: string;                // 触发类型
  triggerOn?: 'mousemove' | 'click';  // 提示框触发条件
  confine?: boolean;               // 是否将提示框限制在图表区域内
  showDelay?: number;              // 延迟触发时间
  transitionDuration?: number;     // 动画过渡时间
  position?: string | number[] | Function;  // 提示框位置
  formatter?: string | Function;   // 提示框内容格式化
  backgroundColor?: string;        // 提示框背景色
  borderWidth?: number;            // 提示框边框宽
  borderColor?: string;            // 提示框边框色
  padding?: number | number[];     // 内边距
  textStyle?: TextStyle;           // 文本样式
}

export interface TextStyle {
  color?: string;                  // 文字颜色
  fontStyle?: 'normal' | 'italic' | 'oblique';  // 字体风格
  fontWeight?: string | number;    // 字体粗细
  fontSize?: number;               // 字体大小
  fontFamily?: string;             // 字体系列
  lineHeight?: number;             // 行高
}

export interface AxisConfig {
  show?: boolean;                  // 是否显示轴
  position?: 'top' | 'bottom';     // 坐标轴位置
  type?: 'category' | 'time' | 'log' | 'value';  // 轴类型
  name?: string;                   // 轴名字
  nameLocation?: 'start' | 'center' | 'end';  // 名字位置
  nameTextStyle?: TextStyle;       // 名字文本样式
  inverse?: boolean;               // 是否反向坐标
  min?: string | number;           // 最小值
  max?: string | number;           // 最大值
  splitNumber?: number;            // 分割段数
  minInterval?: number;            // 最小间隔
  maxInterval?: number;            // 最大间隔
  interval?: number;               // 强制分割间隔
  silent?: boolean;                // 是否静态
  axisLine?: AxisLineConfig;       // 轴线设置
  axisTick?: AxisTickConfig;       // 刻度线设置
  axisLabel?: AxisLabelConfig;     // 标签设置
  splitLine?: SplitLineConfig;     // 分割线设置
}

export interface AxisLineConfig {
  show?: boolean;                  // 是否显示轴线
  symbol?: string | string[];      // 两端箭头
  symbolSize?: number[];           // 箭头大小
  symbolOffset?: number[];         // 箭头偏移
  lineStyle?: LineStyle;           // 线条样式
}

export interface LineStyle {
  color?: string;                  // 线条颜色
  width?: number;                  // 线条宽度
  type?: 'solid' | 'dashed' | 'dotted';  // 线条类型
  opacity?: number;                // 透明度
}

export interface AxisTickConfig {
  show?: boolean;                  // 是否显示刻度线
  inside?: boolean;                // 是否朝内
  length?: number;                 // 刻度线长度
  lineStyle?: LineStyle;           // 线条样式
}

export interface AxisLabelConfig extends TextStyle {
  interval?: number | 'auto';      // 标签间隔
  inside?: boolean;                // 是否朝内
  rotate?: number;                 // 旋转角度
  margin?: number;                 // 标签到轴线距离
  width?: number;                  // 文本宽度
  height?: number;                 // 文本高度
  hideOverlap?: boolean;           // 是否隐藏重叠
  align?: 'left' | 'center' | 'right';  // 对齐方式
}

export interface SplitLineConfig {
  show?: boolean;                  // 是否显示分割线
  interval?: number | 'auto';      // 分割线间隔
  lineStyle?: LineStyle;           // 线条样式
}

export interface SeriesConfig {
  smooth?: boolean;                // 折线是否平滑
  lineStyle?: LineStyle;           // 线条样式
  label?: LabelConfig;             // 标签样式
}

export interface LabelConfig extends TextStyle {
  show?: boolean;                  // 是否显示标签
  interval?: number | 'auto';      // 标签间隔
  inside?: boolean;                // 是否朝内
  rotate?: number;                 // 旋转角度
  margin?: number;                 // 标签到轴线距离
  width?: number;                  // 文本宽度
  height?: number;                 // 文本高度
  hideOverlap?: boolean;           // 是否隐藏重叠
  align?: 'left' | 'center' | 'right';  // 对齐方式
  overflow?: 'none' | 'truncate' | 'break' | 'breakAll';  // 文字超出宽度处理
  ellipsis?: string;               // 省略号
  position?: string;               // 标签位置
} 