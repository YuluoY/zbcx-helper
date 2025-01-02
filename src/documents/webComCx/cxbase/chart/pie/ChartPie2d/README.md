# ChartPie2d 2D饼图组件

`ChartPie2d` 是一个2D饼图组件，用于展示数据的占比分布。

## 基础用法

```vue
<template>
  <cx-chart-pie-2d
    :data="data"
    :config="config"
    :colors="colors"
    @click="handleClick"
  />
</template>

<script>
export default {
  data() {
    return {
      data: [
        { name: '类目1', value: 100 },
        { name: '类目2', value: 200 },
        { name: '类目3', value: 300 }
      ],
      config: {
        tooltip: {
          trigger: 'item',
          show: true
        },
        legend: {
          type: 'plain',
          show: true,
          orient: 'horizontal',
          left: 'center',
          top: 'bottom'
        },
        series: {
          center: ['50%', '50%'],
          radius: ['0%', '75%'],
          label: {
            show: true,
            position: 'outside'
          },
          labelLine: {
            show: true,
            length: 10,
            length2: 10
          }
        }
      },
      colors: ['blue', 'green', 'red']
    }
  },
  methods: {
    handleClick(e) {
      console.log('Chart clicked:', e)
    }
  }
}
</script>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| data | 图表数据 | DataItem[] | [] |
| config | 图表配置 | ChartConfig | {} |
| colors | 饼图颜色数组 | string[] | ['blue', 'green', 'red'] |

### Events

| 事件名称 | 说明 | 回调参数 |
|----------|------|----------|
| click | 点击事件 | (e: Event) => void |
| dblclick | 双击事件 | (e: Event) => void |
| mousedown | 鼠标按下事件 | (e: Event) => void |
| mousemove | 鼠标移动事件 | (e: Event) => void |
| mouseup | 鼠标释放事件 | (e: Event) => void |
| mouseover | 鼠标进入事件 | (e: Event) => void |
| mouseout | 鼠标离开事件 | (e: Event) => void |

更多事件信息请参考 [ECharts 事件文档](https://echarts.apache.org/zh/api.html#events)

## 类型定义

以下是组件的 TypeScript 类型定义，更多 ECharts 相关配置的类型定义请参考：
- [ECharts 配置项文档](https://echarts.apache.org/zh/option.html)
- [ECharts API 文档](https://echarts.apache.org/zh/api.html)

```ts
interface DataItem {
  /** 数据项名称 */
  name: string;
  /** 数据项值 */
  value: number;
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
  left?: string | number;
  /** 图例位置 */
  top?: string | number;
  /** 图例位置 */
  right?: string | number;
  /** 图例位置 */
  bottom?: string | number;
}

interface LabelConfig {
  /** 是否显示标签 */
  show?: boolean;
  /** 标签位置 */
  position?: 'outside' | 'inside' | 'center';
  /** 标签格式化函数 */
  formatter?: string | ((params: any) => string);
}

interface LabelLineConfig {
  /** 是否显示引导线 */
  show?: boolean;
  /** 引导线第一段长度 */
  length?: number;
  /** 引导线第二段长度 */
  length2?: number;
  /** 引导线样式 */
  lineStyle?: {
    /** 引导线颜色 */
    color?: string;
    /** 引导线宽度 */
    width?: number;
    /** 引导线类型 */
    type?: 'solid' | 'dashed' | 'dotted';
  };
}

interface SeriesConfig {
  /** 饼图中心位置 */
  center?: [string | number, string | number];
  /** 饼图半径 */
  radius?: [string | number, string | number] | string | number;
  /** 是否启用防止标签重叠 */
  avoidLabelOverlap?: boolean;
  /** 标签配置 */
  label?: LabelConfig;
  /** 引导线配置 */
  labelLine?: LabelLineConfig;
  /** 是否开启图例hover时的联动高亮 */
  legendHoverLink?: boolean;
  /** 是否开启hover时的放大效果 */
  hoverAnimation?: boolean;
  /** 选中模式 */
  selectedMode?: boolean | 'single' | 'multiple';
  /** 选中时的偏移距离 */
  selectedOffset?: number;
  /** 起始角度 */
  startAngle?: number;
  /** 最小角度 */
  minAngle?: number;
  /** 是否顺时针排布 */
  clockwise?: boolean;
  /** 是否启用防止标签重叠策略 */
  avoidLabelOverlap?: boolean;
}

interface ChartConfig {
  /** 提示框配置 */
  tooltip?: TooltipConfig;
  /** 图例配置 */
  legend?: LegendConfig;
  /** 系列配置 */
  series?: SeriesConfig;
}

interface ChartPie2dProps {
  /** 图表数据 */
  data: DataItem[];
  /** 图表配置 */
  config?: ChartConfig;
  /** 饼图颜色数组 */
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
  /** 百分比 */
  percent?: number;
}
```

## 注意事项

1. 组件会自动适应容器大小，请确保容器具有合适的宽高。
2. 数据更新时，图表会自动重新渲染。
3. 所有的事件回调都会返回原始的事件对象。
4. 配置项支持动态更新。
5. 颜色数组的长度应该与数据项的数量相匹配。
6. 标签位置可以设置为 'outside'（外部）、'inside'（内部）或 'center'（中心）。
7. 支持设置饼图的中心点位置和半径大小。 