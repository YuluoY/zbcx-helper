# 自定义属性编辑

`cx-chart-line1` 按需自定义属性

## 基础用法

可以接收三个参数`data`, `config`（可选）, `color`（可选）,为方便绘制与控制大小，组件内部自带了一个绝对定位，悉知

## 属性

| 名称    | 说明      | 类型    | 可选值                                                                                | 默认值  |
| ------- | --------- | ------- | ------------------------------------------------------------------------------------- | ------- |
| data    | 数据      | Array   |                                                                                       |         |
| config  | 参数配置  | Object  |                                                                                       |         |
| color   | 颜色      | String  | `blue`,`cyan`,`navy`,`green`,<br>`purple`,`magenta`,`yellow`,`orange`,<br>`red`     |         |

## data 属性

| 名称    | 说明                          | 类型    | 可选值  | 默认值  |
| ------- | ----------------------------- | ------- | ------- | ------- |
| name    | 横坐标轴标签名                | String  |         |         |
| value   | 每个圆柱对应的值              | Number  |         |         |

## config 属性

| 名称      | 说明                                | 类型           | 可选值  | 默认值  |
| --------- | ----------------------------------- | -------------- | ------- | ------- |
| grid      | 设置网格布局                        | Object         |         |         |
| tooltip   | 设置提示框组件                      | Object         |         |         |
| legend    | 图例的配置                          | Array / Object |         |         |
| xAxis     | x 轴的配置                          | Array / Object |         |         |
| yAxis     | y 轴的配置                          | Array / Object |         |         |
| dataZoom  | 数据的空间配置，如图表滚动等        | Array          |         |         |
| series    | 系列的样式配置                      | Object         |         |         |

更多配置项信息请参考 [ECharts 配置项文档](https://echarts.apache.org/zh/option.html)

## 事件

| 名称      | 说明                                          | 参数                | 参数说明                    |
| --------- | --------------------------------------------- | ------------------ | --------------------------- |
| click     | 点击                                          | `(params)`         | 见下方 params 参数说明      |
| dblclick  | 双击                                          | `(params)`         | 同 click 事件参数           |
| mousedown | 当鼠标指针移动到元素上方，并按下鼠标左键时    | `(params)`         | 同 click 事件参数           |
| mousemove | 当鼠标指针在指定的元素中移动                  | `(params)`         | 同 click 事件参数           |
| mouseup   | 当在元素上放松鼠标按钮时                      | `(params)`         | 同 click 事件参数           |
| mouseover | 鼠标指针位于元素上方时                        | `(params)`         | 同 click 事件参数           |
| mouseout  | 当鼠标指针从元素上移开时                      | `(params)`         | 同 click 事件参数           |

更多事件信息请参考 [ECharts 事件文档](https://echarts.apache.org/zh/api.html#events)

### params 参数说明

| 参数名          | 说明                           | 类型     |
| --------------- | ------------------------------ | -------- |
| componentType   | 组件类型，固定为 'series'      | String   |
| seriesType      | 系列类型                       | String   |
| seriesIndex     | 系列索引                       | Number   |
| seriesName      | 系列名称                       | String   |
| name            | 数据名称                       | String   |
| dataIndex       | 数据索引                       | Number   |
| value           | 数据值                         | Number   |
| color           | 图形的颜色                     | String   |

## 类型定义

以下是组件的 TypeScript 类型定义，更多 ECharts 相关配置的类型定义请参考：
- [ECharts 配置项文档](https://echarts.apache.org/zh/option.html)
- [ECharts API 文档](https://echarts.apache.org/zh/api.html)

```ts
interface DataItem {
  /** 横坐标轴标签名 */
  name: string;
  /** 每个圆柱对应的值 */
  value: number;
}

interface GridConfig {
  /** 是否显示网格 */
  show?: boolean;
  /** 网格边框颜色 */
  borderColor?: string;
  /** 网格边框宽度 */
  borderWidth?: number;
}

interface TooltipConfig {
  /** 触发类型 */
  trigger?: 'item' | 'axis';
  /** 是否显示提示框 */
  show?: boolean;
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
  /** 坐标轴刻度标签 */
  axisLabel?: {
    /** 是否显示刻度标签 */
    show?: boolean;
    /** 刻度标签旋转角度 */
    rotate?: number;
  };
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
  /** 线条宽度 */
  lineWidth?: number;
  /** 是否平滑曲线 */
  smooth?: boolean;
  /** 标签配置 */
  label?: {
    /** 是否显示标签 */
    show?: boolean;
    /** 标签位置 */
    position?: 'top' | 'left' | 'right' | 'bottom' | 'inside';
  };
  /** 标记点配置 */
  symbolSize?: number;
  /** 标记点类型 */
  symbol?: 'circle' | 'rect' | 'roundRect' | 'triangle' | 'diamond' | 'pin' | 'arrow' | 'none';
}

interface ChartConfig {
  /** 网格配置 */
  grid?: GridConfig;
  /** 提示框配置 */
  tooltip?: TooltipConfig;
  /** 图例配置 */
  legend?: LegendConfig;
  /** X轴配置 */
  xAxis?: AxisConfig;
  /** Y轴配置 */
  yAxis?: AxisConfig;
  /** 数据缩放配置 */
  dataZoom?: DataZoomConfig[];
  /** 系列配置 */
  series?: SeriesConfig;
}

interface ChartLine1Props {
  /** 图表数据 */
  data: DataItem[];
  /** 图表配置 */
  config?: ChartConfig;
  /** 线条颜色 */
  color?: 'blue' | 'cyan' | 'navy' | 'green' | 'purple' | 'magenta' | 'yellow' | 'orange' | 'red';
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