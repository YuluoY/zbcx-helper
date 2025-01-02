# ChartStackBar 堆叠柱状图组件

`ChartStackBar` 是一个堆叠柱状图组件，用于展示多维数据的堆叠柱状图。

## 基础用法

```vue
<template>
  <cx-chart-stack-bar
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
      data: {
        values: [
          { name: '系列1', value: 100 },
          { name: '系列2', value: 200 },
          { name: '系列3', value: 300 }
        ],
        axises: ['类目1', '类目2', '类目3']
      },
      config: {
        grid: {
          show: true,
          borderColor: '#ccc',
          borderWidth: 1
        },
        tooltip: {
          trigger: 'axis',
          show: true
        },
        legend: {
          type: 'plain',
          show: true
        },
        xAxis: {
          type: 'category',
          show: true
        },
        yAxis: {
          type: 'value',
          show: true
        },
        series: {
          barWidth: '40%',
          label: {
            show: false
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
| data | 图表数据 | DataItem | - |
| config | 图表配置 | ChartConfig | {} |
| colors | 柱状图颜色数组 | string[] | ['blue', 'green', 'red'] |

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

## 类型定义

```ts
interface SeriesItem {
  /** 系列名称 */
  name: string;
  /** 系列值 */
  value: number;
}

interface DataItem {
  /** 数据系列数组 */
  values: SeriesItem[];
  /** 坐标轴类目数组 */
  axises: string[];
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

interface SeriesConfig {
  /** 柱状图宽度 */
  barWidth?: string;
  /** 标签配置 */
  label?: {
    /** 是否显示标签 */
    show?: boolean;
    /** 标签位置 */
    position?: 'top' | 'left' | 'right' | 'bottom' | 'inside';
  };
  /** 堆叠名称 */
  stack?: string;
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
  /** 系列配置 */
  series?: SeriesConfig;
}

interface ChartStackBarProps {
  /** 图表数据 */
  data: DataItem;
  /** 图表配置 */
  config?: ChartConfig;
  /** 柱状图颜色数组 */
  colors?: string[];
}
```

## 注意事项

1. 组件会自动适应容器大小，请确保容器具有合适的宽高。
2. 数据更新时，图表会自动重新渲染。
3. 所有的事件回调都会返回原始的事件对象。
4. 配置项支持动态更新。
5. 颜色数组的长度应该与数据系列的数量相匹配。
6. 图例会根据数据系列自动生成。 