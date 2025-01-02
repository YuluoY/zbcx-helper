export interface DataItem {
  values: Array<{
    name: string;
    value: number;
  }>;
  axises: string[];
}

export interface GridConfig {
  show?: boolean;
  z?: number;
  left?: string | number;
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  width?: string | number;
  height?: string | number;
  borderColor?: string;
  backgroundColor?: string;
  borderWidth?: number;
}

export interface TooltipConfig {
  show?: boolean;
  trigger?: 'item' | 'axis';
  triggerOn?: 'mousemove' | 'click';
  confine?: boolean;
  showDelay?: number;
  transitionDuration?: number;
  position?: string | number[] | Function;
  formatter?: string | Function;
  backgroundColor?: string;
  borderWidth?: number;
  borderColor?: string;
  padding?: number | number[];
  textStyle?: TextStyle;
}

export interface TextStyle {
  color?: string;
  fontStyle?: 'normal' | 'italic' | 'oblique';
  fontWeight?: string | number;
  fontSize?: number;
  fontFamily?: string;
  lineHeight?: number;
}

export interface AxisLineStyle {
  color?: string;
  width?: number;
  type?: 'solid' | 'dashed' | 'dotted';
  opacity?: number;
}

export interface AxisLine {
  show?: boolean;
  symbol?: string | string[];
  symbolSize?: number | number[];
  symbolOffset?: number | number[];
  lineStyle?: AxisLineStyle;
}

export interface AxisTick {
  show?: boolean;
  inside?: boolean;
  length?: number;
  lineStyle?: AxisLineStyle;
}

export interface AxisLabel {
  show?: boolean;
  color?: string;
  fontStyle?: string;
  fontWeight?: string | number;
  fontSize?: number;
  fontFamily?: string;
  lineHeight?: number;
  interval?: number | 'auto';
  inside?: boolean;
  rotate?: number;
  margin?: number;
  width?: number;
  height?: number;
  hideOverlap?: boolean;
  align?: 'left' | 'center' | 'right';
}

export interface SplitLine {
  show?: boolean;
  interval?: number | 'auto';
  lineStyle?: AxisLineStyle;
}

export interface AxisConfig {
  show?: boolean;
  position?: 'top' | 'bottom' | 'left' | 'right';
  type?: 'category' | 'value' | 'time' | 'log';
  name?: string;
  nameLocation?: 'start' | 'middle' | 'center' | 'end';
  nameTextStyle?: TextStyle;
  inverse?: boolean;
  min?: string | number;
  max?: string | number;
  splitNumber?: number;
  z?: number;
  minInterval?: number;
  maxInterval?: number;
  interval?: number;
  silent?: boolean;
  axisLine?: AxisLine;
  axisTick?: AxisTick;
  axisLabel?: AxisLabel;
  splitLine?: SplitLine;
}

export interface SeriesLabel extends AxisLabel {
  overflow?: 'none' | 'truncate' | 'break' | 'breakAll';
  ellipsis?: string;
  position?: 'top' | 'left' | 'right' | 'bottom' | 'inside' | 'outside';
}

export interface SeriesConfig {
  barWidth?: number | string;
  barCategoryGap?: number | string;
  label?: SeriesLabel;
}

export interface LegendConfig {
  type?: 'plain' | 'scroll';
  show?: boolean;
  z?: number;
  left?: string | number;
  right?: string | number;
}

export interface ChartConfig {
  grid?: GridConfig;
  tooltip?: TooltipConfig;
  legend?: LegendConfig;
  xAxis?: AxisConfig;
  yAxis?: AxisConfig;
  series?: SeriesConfig;
}

export interface ChartStackBarProps {
  data: DataItem;
  config?: ChartConfig;
  colors?: string[];
} 