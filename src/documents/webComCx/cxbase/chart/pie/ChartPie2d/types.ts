export interface DataItem {
  name: string;
  value: number;
}

export interface TextStyle {
  color?: string;
  fontStyle?: 'normal' | 'italic' | 'oblique';
  fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | number;
  fontFamily?: string;
  fontSize?: number;
  align?: 'left' | 'center' | 'right';
  verticalAlign?: 'top' | 'middle' | 'bottom';
  lineHeight?: number;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  padding?: number | number[];
  shadowColor?: string;
  shadowBlur?: number;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
}

export interface TooltipConfig {
  show?: boolean;
  trigger?: 'item' | 'axis' | 'none';
  axisPointer?: {
    type?: 'line' | 'shadow' | 'none';
    axis?: 'auto' | 'x' | 'y' | 'radius' | 'angle';
  };
  showContent?: boolean;
  alwaysShowContent?: boolean;
  triggerOn?: 'mousemove' | 'click' | 'mousemove|click' | 'none';
  showDelay?: number;
  hideDelay?: number;
  enterable?: boolean;
  confine?: boolean;
  transitionDuration?: number;
  position?: string | number[];
  formatter?: string | Function;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  padding?: number | number[];
  textStyle?: TextStyle;
}

export interface LegendConfig {
  show?: boolean;
  type?: 'plain' | 'scroll';
  orient?: 'horizontal' | 'vertical';
  left?: string | number;
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  width?: string | number;
  height?: string | number;
  align?: 'auto' | 'left' | 'right';
  padding?: number | number[];
  itemGap?: number;
  itemWidth?: number;
  itemHeight?: number;
  selectedMode?: boolean | 'single' | 'multiple';
  inactiveColor?: string;
  textStyle?: TextStyle;
  formatter?: string | Function;
}

export interface SeriesLabel {
  show?: boolean;
  position?: 'outside' | 'inside' | 'center' | 'inner' | string | number[];
  rotate?: number;
  offset?: number[];
  formatter?: string | Function;
  color?: string;
  fontStyle?: string;
  fontWeight?: string | number;
  fontFamily?: string;
  fontSize?: number;
  align?: string;
  verticalAlign?: string;
  lineHeight?: number;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  padding?: number | number[];
  shadowColor?: string;
  shadowBlur?: number;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
}

export interface SeriesLabelLine {
  show?: boolean;
  showAbove?: boolean;
  length?: number;
  length2?: number;
  smooth?: boolean | number;
  minTurnAngle?: number;
  lineStyle?: {
    color?: string;
    width?: number;
    type?: 'solid' | 'dashed' | 'dotted';
    opacity?: number;
  };
}

export interface SeriesConfig {
  type?: 'pie';
  name?: string;
  legendHoverLink?: boolean;
  hoverAnimation?: boolean;
  hoverOffset?: number;
  selectedMode?: boolean | 'single' | 'multiple';
  selectedOffset?: number;
  clockwise?: boolean;
  startAngle?: number;
  minAngle?: number;
  minShowLabelAngle?: number;
  roseType?: boolean | 'radius' | 'area';
  avoidLabelOverlap?: boolean;
  stillShowZeroSum?: boolean;
  percentPrecision?: number;
  cursor?: string;
  zlevel?: number;
  z?: number;
  left?: string | number;
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  width?: string | number;
  height?: string | number;
  center?: (string | number)[];
  radius?: (string | number)[] | string | number;
  label?: SeriesLabel;
  labelLine?: SeriesLabelLine;
  itemStyle?: {
    color?: string;
    borderColor?: string;
    borderWidth?: number;
    borderType?: 'solid' | 'dashed' | 'dotted';
    borderRadius?: number | number[];
    shadowBlur?: number;
    shadowColor?: string;
    shadowOffsetX?: number;
    shadowOffsetY?: number;
    opacity?: number;
  };
  emphasis?: {
    disabled?: boolean;
    scale?: boolean;
    scaleSize?: number;
    focus?: 'none' | 'self' | 'series';
    blurScope?: 'coordinateSystem' | 'series' | 'global';
    label?: SeriesLabel;
    labelLine?: SeriesLabelLine;
    itemStyle?: {
      color?: string;
      borderColor?: string;
      borderWidth?: number;
      borderType?: 'solid' | 'dashed' | 'dotted';
      borderRadius?: number | number[];
      shadowBlur?: number;
      shadowColor?: string;
      shadowOffsetX?: number;
      shadowOffsetY?: number;
      opacity?: number;
    };
  };
}

export interface ChartConfig {
  tooltip?: TooltipConfig;
  legend?: LegendConfig;
  series?: SeriesConfig;
}

export interface ChartPie2dProps {
  data: DataItem[];
  config?: ChartConfig;
  colors?: string[];
} 