# Echart图表组件

`cx-echart` 是一个基于 ECharts 的图表组件，提供了灵活的配置选项和防抖策略。

## 基础用法

```vue
<template>
  <cx-echart
    :option="option"
    :autoDebounce="true"
    :debounceTime="300"
    @created="handleCreated"
  />
</template>

<script>
export default {
  data() {
    return {
      option: {
        title: {
          text: 'ECharts 示例'
        },
        tooltip: {},
        xAxis: {
          data: ['A', 'B', 'C', 'D', 'E']
        },
        yAxis: {},
        series: [{
          name: '数值',
          type: 'bar',
          data: [10, 20, 30, 40, 50]
        }]
      }
    }
  },
  methods: {
    handleCreated(chart, vm) {
      console.log('Chart instance:', chart)
      console.log('Component instance:', vm)
    }
  }
}
</script>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| option | echarts的setOption函数可接收的参数对象 | Object | {} |
| autoDebounce | 是否启用防抖策略 | Boolean | false |
| debounceTime | 防抖间隔，单位ms | Number | 300 |
| defShow | 是否需要加载默认echarts配置 | Boolean | false |

### Events

| 事件名称 | 说明 | 回调参数 |
|----------|------|----------|
| created | echarts图表渲染完毕后的回调函数 | (echart: ECharts, vm: ComponentInstance) |

## 类型定义

以下是组件的 TypeScript 类型定义，更多 ECharts 相关配置的类型定义请参考：
- [ECharts 配置项文档](https://echarts.apache.org/zh/option.html)
- [ECharts API 文档](https://echarts.apache.org/zh/api.html)

```ts
/** 标题配置接口 */
interface TitleConfig {
  /** 标题文本 */
  text?: string;
  /** 标题子文本 */
  subtext?: string;
  /** 标题位置 */
  left?: string | number;
  /** 标题的文本样式 */
  textStyle?: {
    /** 文字颜色 */
    color?: string;
    /** 字体大小 */
    fontSize?: number;
    /** 字体粗细 */
    fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | number;
  };
}

/** 提示框配置接口 */
interface TooltipConfig {
  /** 触发类型 */
  trigger?: 'item' | 'axis' | 'none';
  /** 是否显示提示框 */
  show?: boolean;
  /** 提示框格式化函数 */
  formatter?: string | ((params: any) => string);
  /** 提示框样式 */
  textStyle?: {
    /** 文字颜色 */
    color?: string;
    /** 字体大小 */
    fontSize?: number;
  };
  /** 提示框背景色 */
  backgroundColor?: string;
  /** 提示框边框颜色 */
  borderColor?: string;
  /** 提示框边框宽度 */
  borderWidth?: number;
  /** 提示框内边距 */
  padding?: number | number[];
}

/** 图例配置接口 */
interface LegendConfig {
  /** 是否显示图例 */
  show?: boolean;
  /** 图例类型 */
  type?: 'plain' | 'scroll';
  /** 图例布局朝向 */
  orient?: 'horizontal' | 'vertical';
  /** 图例位置 */
  left?: string | number;
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  /** 图例图形的宽度和高度 */
  itemWidth?: number;
  itemHeight?: number;
  /** 图例文本样式 */
  textStyle?: {
    /** 文字颜色 */
    color?: string;
    /** 字体大小 */
    fontSize?: number;
  };
}

/** 网格配置接口 */
interface GridConfig {
  /** 是否显示网格 */
  show?: boolean;
  /** 网格位置 */
  left?: string | number;
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  /** 网格宽度和高度 */
  width?: string | number;
  height?: string | number;
  /** 网格边框颜色 */
  borderColor?: string;
  /** 网格边框宽度 */
  borderWidth?: number;
  /** 网格背景色 */
  backgroundColor?: string;
  /** 是否包含标签 */
  containLabel?: boolean;
}

/** 坐标轴配置接口 */
interface AxisConfig {
  /** 是否显示坐标轴 */
  show?: boolean;
  /** 坐标轴类型 */
  type?: 'value' | 'category' | 'time' | 'log';
  /** 坐标轴名称 */
  name?: string;
  /** 坐标轴名称位置 */
  nameLocation?: 'start' | 'middle' | 'end';
  /** 坐标轴名称文字样式 */
  nameTextStyle?: {
    /** 文字颜色 */
    color?: string;
    /** 字体大小 */
    fontSize?: number;
  };
  /** 坐标轴刻度标签 */
  axisLabel?: {
    /** 是否显示刻度标签 */
    show?: boolean;
    /** 刻度标签与轴线之间的距离 */
    margin?: number;
    /** 刻度标签的内容格式器 */
    formatter?: string | ((value: any) => string);
    /** 刻度标签文字样式 */
    textStyle?: {
      /** 文字颜色 */
      color?: string;
      /** 字体大小 */
      fontSize?: number;
    };
  };
  /** 坐标轴线 */
  axisLine?: {
    /** 是否显示坐标轴线 */
    show?: boolean;
    /** 线条样式 */
    lineStyle?: {
      /** 线条颜色 */
      color?: string;
      /** 线条宽度 */
      width?: number;
      /** 线条类型 */
      type?: 'solid' | 'dashed' | 'dotted';
    };
  };
  /** 坐标轴刻度 */
  axisTick?: {
    /** 是否显示坐标轴刻度 */
    show?: boolean;
    /** 刻度长度 */
    length?: number;
  };
  /** 分割线 */
  splitLine?: {
    /** 是否显示分割线 */
    show?: boolean;
    /** 线条样式 */
    lineStyle?: {
      /** 线条颜色 */
      color?: string | string[];
      /** 线条宽度 */
      width?: number;
      /** 线条类型 */
      type?: 'solid' | 'dashed' | 'dotted';
    };
  };
}

/** 系列数据配置接口 */
interface SeriesConfig {
  /** 系列名称 */
  name?: string;
  /** 系列类型 */
  type?: 'line' | 'bar' | 'pie' | 'scatter' | 'radar' | 'map' | 'tree' | 'treemap' | 'graph' | 'gauge';
  /** 系列数据 */
  data?: any[];
  /** 标记的图形 */
  symbol?: string;
  /** 标记的大小 */
  symbolSize?: number;
  /** 是否平滑曲线 */
  smooth?: boolean;
  /** 标签配置 */
  label?: {
    /** 是否显示标签 */
    show?: boolean;
    /** 标签位置 */
    position?: 'top' | 'left' | 'right' | 'bottom' | 'inside' | 'outside';
    /** 标签文字样式 */
    textStyle?: {
      /** 文字颜色 */
      color?: string;
      /** 字体大小 */
      fontSize?: number;
    };
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
    /** 填充颜色 */
    color?: string;
    /** 填充透明度 */
    opacity?: number;
  };
}

/** ECharts 配置项接口 */
interface EChartsOption {
  /** 标题配置 */
  title?: TitleConfig;
  /** 提示框配置 */
  tooltip?: TooltipConfig;
  /** 图例配置 */
  legend?: LegendConfig;
  /** 网格配置 */
  grid?: GridConfig;
  /** X轴配置 */
  xAxis?: AxisConfig | AxisConfig[];
  /** Y轴配置 */
  yAxis?: AxisConfig | AxisConfig[];
  /** 系列列表 */
  series?: SeriesConfig[];
  /** 调色盘颜色列表 */
  color?: string[];
  /** 背景色 */
  backgroundColor?: string;
  /** 动画配置 */
  animation?: boolean;
  /** 动画时长 */
  animationDuration?: number;
  /** 动画缓动效果 */
  animationEasing?: string;
}

/** Echart 组件属性接口 */
interface EchartProps {
  /** ECharts 配置项 */
  option: EChartsOption;
  /** 是否启用防抖策略 */
  autoDebounce?: boolean;
  /** 防抖间隔，单位ms */
  debounceTime?: number;
  /** 是否需要加载默认echarts配置 */
  defShow?: boolean;
}

/** 组件实例接口 */
interface ComponentInstance {
  /** 组件的唯一标识符 */
  _uid: number;
  /** 组件的名称 */
  _name: string;
  /** 组件的引用 */
  $refs: {
    [key: string]: any;
  };
  /** 组件的数据对象 */
  $data: {
    [key: string]: any;
  };
  /** 组件的方法 */
  $methods: {
    [key: string]: Function;
  };
}

/** 事件参数接口 */
interface EventParams {
  /** 组件类型 */
  componentType: string;
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
  value: any;
  /** 颜色值 */
  color: string;
}
```

## 注意事项

1. 组件会自动处理图表的响应式调整：
   - 监听容器大小变化
   - 自动调整图表大小
   - 优化渲染性能

2. 当 `autoDebounce` 为 true 时，组件会使用防抖策略来优化性能：
   - 减少频繁更新
   - 优化内存使用
   - 提高渲染效率

3. 如果 `option` 为空且 `defShow` 为 true，组件会自动生成随机数据进行展示：
   - 生成模拟数据
   - 使用默认配置
   - 展示基础图表

4. `created` 事件会在图表首次渲染完成后触发，可以通过该事件获取图表实例：
   - 访问图表方法
   - 绑定事件处理
   - 实现交互功能

5. 建议在组件销毁时手动清理图表实例：
   - 释放内存
   - 移除事件监听
   - 清理定时器

6. 支持所有 ECharts 的配置项和事件：
   - 完整的图表类型
   - 丰富的样式配置
   - 灵活的交互方式

7. 配置项支持响应式更新：
   - 数据变化自动更新
   - 样式动态调整
   - 平滑过渡动画 