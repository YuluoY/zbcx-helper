# 柱状折线图

`cx-chart-bar-and-line` 是一个柱状图和折线图的组合图表组件。

## 基础用法

```vue
<template>
  <cx-chart-bar-and-line
    :data="data"
    :config="config"
    :colors="colors"
  />
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          values: [100, 200, 300],
          axises: ['类目1', '类目2', '类目3']
        }
      ],
      config: {
        grid: {
          show: false,
          left: '5%',
          right: '5%',
          top: '10%',
          bottom: '10%'
        },
        tooltip: {
          trigger: 'axis',
          show: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: true
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            type: 'bar',
            barWidth: 20
          },
          {
            type: 'line',
            smooth: true
          }
        ]
      },
      colors: ['blue', 'green', 'red']
    }
  }
}
</script>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| data | 数据 | Array | [] |
| config | 参数配置 | Object | {} |
| colors | 颜色 | Array | [] |

### data 数据结构

| 属性 | 说明 | 类型 |
|------|------|------|
| values | 数据的维度(即有多少组柱子) | Array |
| axises | 坐标轴 | Array |

### config 配置项

| 属性 | 说明 | 类型 |
|------|------|------|
| grid | 设置网格布局 | Object |
| tooltip | 设置提示框组件 | Object |
| legend | 图例的配置 | Array/Object |
| xAxis | x轴的配置 | Array/Object |
| yAxis | y轴的配置 | Array/Object |
| dataZoom | 数据的空间配置 | Array |
| series | 系列的样式配置 | Object |

更多配置项信息请参考 [ECharts 配置项文档](https://echarts.apache.org/zh/option.html)

#### grid 配置

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| show | 是否显示网格 | Boolean | false |
| z | 层级值 | Number | 2 |
| left/top/right/bottom | 图表边距 | String/Number | 5%/10%/5%/10% |
| width/height | 网格宽高 | String/Number | - |
| borderColor | 网格边框色 | String | #ffff |
| backgroundColor | 网格背景色 | String | transparent |
| borderWidth | 网格边框宽度 | Number | 1 |

## 类型定义

以下是组件的 TypeScript 类型定义，更多 ECharts 相关配置的类型定义请参考：
- [ECharts 配置项文档](https://echarts.apache.org/zh/option.html)
- [ECharts API 文档](https://echarts.apache.org/zh/api.html)

```ts
interface DataItem {
  /** 数据的维度(即有多少组柱子) */
  values: number[];
  /** 坐标轴类目数组 */
  axises: string[];
}

interface GridConfig {
  /** 是否显示网格 */
  show?: boolean;
  /** 层级值 */
  z?: number;
  /** 网格左边距 */
  left?: string | number;
  /** 网格上边距 */
  top?: string | number;
  /** 网格右边距 */
  right?: string | number;
  /** 网格下边距 */
  bottom?: string | number;
  /** 网格宽度 */
  width?: string | number;
  /** 网格高度 */
  height?: string | number;
  /** 网格边框颜色 */
  borderColor?: string;
  /** 网格背景色 */
  backgroundColor?: string;
  /** 网格边框宽度 */
  borderWidth?: number;
}

interface TooltipConfig {
  /** 触发类型 */
  trigger?: 'item' | 'axis';
  /** 是否显示提示框 */
  show?: boolean;
  /** 提示框格式化函数 */
  formatter?: string | ((params: any) => string);
}

interface LegendConfig {
  /** 图例类型 */
  type?: 'plain' | 'scroll';
  /** 是否显示图例 */
  show?: boolean;
  /** 图例布局朝向 */
  orient?: 'horizontal' | 'vertical';
  /** 图例位置 */
  position?: 'top' | 'bottom' | 'left' | 'right';
}

interface AxisConfig {
  /** 坐标轴类型 */
  type?: 'value' | 'category';
  /** 是否显示坐标轴 */
  show?: boolean;
  /** 坐标轴名称 */
  name?: string;
  /** 是否显示分隔线 */
  splitLine?: {
    /** 是否显示分隔线 */
    show?: boolean;
    /** 分隔线样式 */
    lineStyle?: {
      /** 分隔线颜色 */
      color?: string | string[];
      /** 分隔线宽度 */
      width?: number;
      /** 分隔线类型 */
      type?: 'solid' | 'dashed' | 'dotted';
    };
  };
  /** 坐标轴刻度标签 */
  axisLabel?: {
    /** 是否显示刻度标签 */
    show?: boolean;
    /** 刻度标签旋转角度 */
    rotate?: number;
    /** 刻度标签格式化函数 */
    formatter?: string | ((value: any) => string);
  };
  /** 是否留白策略 */
  boundaryGap?: boolean;
}

interface DataZoomConfig {
  /** 类型 */
  type?: 'slider' | 'inside';
  /** 是否显示 */
  show?: boolean;
  /** 起始位置 */
  start?: number;
  /** 结束位置 */
  end?: number;
}

interface SeriesConfig {
  /** 系列类型 */
  type: 'bar' | 'line';
  /** 系列名称 */
  name?: string;
  /** 柱状图宽度 */
  barWidth?: number | string;
  /** 是否平滑曲线 */
  smooth?: boolean;
  /** 标记的大小 */
  symbolSize?: number;
  /** 标记的图形 */
  symbol?: string;
  /** 标签配置 */
  label?: {
    /** 是否显示标签 */
    show?: boolean;
    /** 标签位置 */
    position?: 'top' | 'left' | 'right' | 'bottom' | 'inside';
  };
  /** 线条样式 */
  lineStyle?: {
    /** 线条颜色 */
    color?: string;
    /** 线条宽度 */
    width?: number;
    /** 线条类型 */
    type?: 'solid' | 'dashed' | 'dotted';
  };
  /** 区域填充样式 */
  areaStyle?: {
    /** 区域填充颜色 */
    color?: string;
    /** 区域填充透明度 */
    opacity?: number;
  };
}

interface ChartConfig {
  /** 网格配置 */
  grid?: GridConfig;
  /** 提示框配置 */
  tooltip?: TooltipConfig;
  /** 图例配置 */
  legend?: LegendConfig;
  /** X轴配置 */
  xAxis?: AxisConfig | AxisConfig[];
  /** Y轴配置 */
  yAxis?: AxisConfig | AxisConfig[];
  /** 数据缩放配置 */
  dataZoom?: DataZoomConfig[];
  /** 系列配置 */
  series?: SeriesConfig[];
}

interface ChartBarAndLineProps {
  /** 图表数据 */
  data: DataItem[];
  /** 图表配置 */
  config?: ChartConfig;
  /** 图表颜色数组 */
  colors?: string[];
}

interface EventParams {
  /** 组件类型，固定为 'series' */
  componentType: 'series';
  /** 系列类型 */
  seriesType: string;
  /** 系列索引 */
  seriesIndex: number;
  /** 系列名称 */
  seriesName: string;
  /** 数据名称 */
  name: string;
  /** 数据索引 */
  dataIndex: number;
  /** 数据值 */
  value: number;
  /** 图形的颜色 */
  color: string;
}
```

## 注意事项

1. 组件会自动适应容器大小，请确保容器具有合适的宽高。
2. `data` 中的 `values` 数组长度应该与 `axises` 数组长度相匹配。
3. `series` 配置中的 `type` 属性决定了该系列是柱状图还是折线图。
4. 颜色数组的长度应该与数据系列的数量相匹配。
5. 可以通过 `dataZoom` 配置实现数据的缩放和滚动功能。
6. 网格的边距可以使用百分比或具体的像素值。 