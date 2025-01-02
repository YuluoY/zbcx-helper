export interface DataItem {
  values: any[];
  axises: any[];
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
  trigger?: 'item' | 'axis' | 'none';
  axisPointer?: {
    type?: 'line' | 'shadow' | 'none';
    axis?: 'auto' | 'x' | 'y';
  };
  formatter?: string | Function;
}

export interface AxisConfig {
  show?: boolean;
  type?: 'value' | 'category' | 'time' | 'log';
  name?: string;
  nameLocation?: 'start' | 'middle' | 'end';
  nameTextStyle?: {
    color?: string;
    fontSize?: number;
    fontWeight?: string | number;
  };
  nameGap?: number;
  nameRotate?: number;
  inverse?: boolean;
  boundaryGap?: boolean | (string | number)[];
  min?: number | string | Function;
  max?: number | string | Function;
  scale?: boolean;
  splitNumber?: number;
  minInterval?: number;
  maxInterval?: number;
  interval?: number;
  logBase?: number;
  silent?: boolean;
  triggerEvent?: boolean;
  axisLine?: {
    show?: boolean;
    onZero?: boolean;
    lineStyle?: {
      color?: string;
      width?: number;
      type?: 'solid' | 'dashed' | 'dotted';
    };
  };
  axisTick?: {
    show?: boolean;
    alignWithLabel?: boolean;
    interval?: number | Function;
    inside?: boolean;
    length?: number;
    lineStyle?: {
      color?: string;
      width?: number;
      type?: 'solid' | 'dashed' | 'dotted';
    };
  };
  axisLabel?: {
    show?: boolean;
    interval?: number | Function;
    inside?: boolean;
    rotate?: number;
    margin?: number;
    formatter?: string | Function;
    showMinLabel?: boolean;
    showMaxLabel?: boolean;
    color?: string;
    fontSize?: number;
    fontWeight?: string | number;
  };
  splitLine?: {
    show?: boolean;
    interval?: number | Function;
    lineStyle?: {
      color?: string | string[];
      width?: number;
      type?: 'solid' | 'dashed' | 'dotted';
    };
  };
  splitArea?: {
    show?: boolean;
    interval?: number | Function;
    areaStyle?: {
      color?: string | string[];
      opacity?: number;
    };
  };
}

export interface DataZoomConfig {
  type?: 'inside' | 'slider';
  show?: boolean;
  start?: number;
  end?: number;
  orient?: 'horizontal' | 'vertical';
  zoomLock?: boolean;
  throttle?: number;
}

export interface SeriesConfig {
  type?: 'line' | 'bar';
  name?: string;
  stack?: string;
  barWidth?: number;
  barGap?: string;
  smooth?: boolean;
  symbol?: string;
  symbolSize?: number;
  showSymbol?: boolean;
  label?: {
    show?: boolean;
    position?: 'top' | 'left' | 'right' | 'bottom' | 'inside';
    formatter?: string | Function;
  };
  itemStyle?: {
    color?: string;
    borderColor?: string;
    borderWidth?: number;
    borderType?: 'solid' | 'dashed' | 'dotted';
    shadowBlur?: number;
    shadowColor?: string;
    shadowOffsetX?: number;
    shadowOffsetY?: number;
    opacity?: number;
  };
  emphasis?: {
    label?: {
      show?: boolean;
      position?: 'top' | 'left' | 'right' | 'bottom' | 'inside';
      formatter?: string | Function;
    };
    itemStyle?: {
      color?: string;
      borderColor?: string;
      borderWidth?: number;
      borderType?: 'solid' | 'dashed' | 'dotted';
      shadowBlur?: number;
      shadowColor?: string;
      shadowOffsetX?: number;
      shadowOffsetY?: number;
      opacity?: number;
    };
  };
}

export interface ChartConfig {
  grid?: GridConfig;
  tooltip?: TooltipConfig;
  legend?: Record<string, any>;
  xAxis?: AxisConfig | AxisConfig[];
  yAxis?: AxisConfig | AxisConfig[];
  dataZoom?: DataZoomConfig[];
  series?: SeriesConfig[];
}

export interface ChartBarAndLineProps {
  data: DataItem[];
  config?: ChartConfig;
  colors?: string[];
} 