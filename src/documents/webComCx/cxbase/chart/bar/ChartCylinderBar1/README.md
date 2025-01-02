# ChartCylinderBar1 单圆柱形柱状图组件

`ChartCylinderBar1` 是一个单根圆柱形柱状图组件，用于展示单个数据系列的柱状图数据。

## 基础用法

```vue
<template>
  <cx-chart-cylinder-bar1
    :data="data"
    :config="config"
    color="blue"
    @click="handleClick"
  />
</template>

<script>
export default {
  data() {
    return {
      data: [
        { name: 'A', value: 100 },
        { name: 'B', value: 200 },
        { name: 'C', value: 300 }
      ],
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
      }
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
| color | 柱状图颜色 | string | 'blue' |

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
interface DataItem {
  /** 数据项名称 */
  name: string;
  /** 数据项值 */
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

interface AxisConfig {
  /** 坐标轴类型 */
  type?: 'value' | 'category';
  /** 是否显示坐标轴 */
  show?: boolean;
}

interface SeriesConfig {
  /** 柱状图宽度 */
  barWidth?: string;
  /** 标签配置 */
  label?: {
    /** 是否显示标签 */
    show?: boolean;
  };
}

interface ChartConfig {
  /** 网格配置 */
  grid?: GridConfig;
  /** 提示框配置 */
  tooltip?: TooltipConfig;
  /** X轴配置 */
  xAxis?: AxisConfig;
  /** Y轴配置 */
  yAxis?: AxisConfig;
  /** 系列配置 */
  series?: SeriesConfig;
}

interface ChartCylinderBar1Props {
  /** 图表数据 */
  data: DataItem[];
  /** 图表配置 */
  config?: ChartConfig;
  /** 柱状图颜色 */
  color?: string;
}
```

## 注意事项

1. 组件会自动适应容器大小，请确保容器具有合适的宽高。
2. 数据更新时，图表会自动重新渲染。
3. 所有的事件回调都会返回原始的事件对象。
4. 配置项支持动态更新。 