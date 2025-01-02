# 动态图表组件

`cx-chart-type` 是一个动态图表组件，可以根据传入的图表类型动态渲染不同的图表。

## 基础用法

```vue
<template>
  <cx-chart-type
    chartType="line"
    :config="config"
    :data="data"
    :colors="colors"
  />
</template>

<script>
export default {
  data() {
    return {
      config: {
        // 图表配置
      },
      data: {
        // 图表数据
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
| chartType | 提供的图表组件名 | String | '' |
| config | 对应类型组件的配置参数 | Object | {} |
| data | 对应类型组件的数值参数 | Object | {} |
| colors | 对应类型组件的颜色参数 | Array | [] |

## 类型定义

以下是组件的 TypeScript 类型定义：

```ts
/** 支持的图表类型 */
type ChartTypes = 
  | 'line1'           // 单线图
  | 'lineN'           // 多线图
  | 'bar1'            // 单柱状图
  | 'barN'            // 多柱状图
  | 'pie2d'           // 2D饼图
  | 'pie3d'           // 3D饼图
  | 'cylinderBar1'    // 单柱体图
  | 'cylinderBarN'    // 多柱体图
  | 'prismBar1'       // 单棱柱图
  | 'prismBarN'       // 多棱柱图
  | 'stackPrismBar'   // 堆叠棱柱图
  | 'barAndLine';     // 柱状折线图

/** 基础数据项接口 */
interface BaseDataItem {
  /** 数据项名称 */
  name: string;
  /** 数据项值 */
  value: number;
}

/** 系列数据项接口 */
interface SeriesDataItem {
  /** 数据系列数组 */
  values: number[];
  /** 坐标轴类目数组 */
  axises: string[];
}

/** 图表基础配置接口 */
interface BaseChartConfig {
  /** 网格配置 */
  grid?: {
    /** 是否显示网格 */
    show?: boolean;
    /** 网格边框颜色 */
    borderColor?: string;
    /** 网格边框宽度 */
    borderWidth?: number;
    /** 网格位置和大小 */
    left?: string | number;
    top?: string | number;
    right?: string | number;
    bottom?: string | number;
  };
  /** 提示框配置 */
  tooltip?: {
    /** 触发类型 */
    trigger?: 'item' | 'axis';
    /** 是否显示提示框 */
    show?: boolean;
    /** 提示框格式化函数 */
    formatter?: string | ((params: any) => string);
  };
  /** 图例配置 */
  legend?: {
    /** 是否显示图例 */
    show?: boolean;
    /** 图例类型 */
    type?: 'plain' | 'scroll';
    /** 图例布局朝向 */
    orient?: 'horizontal' | 'vertical';
    /** 图例位置 */
    position?: 'top' | 'bottom' | 'left' | 'right';
  };
  /** 坐标轴配置 */
  xAxis?: {
    /** 坐标轴类型 */
    type?: 'value' | 'category';
    /** 是否显示坐标轴 */
    show?: boolean;
    /** 坐标轴名称 */
    name?: string;
  };
  yAxis?: {
    /** 坐标轴类型 */
    type?: 'value' | 'category';
    /** 是否显示坐标轴 */
    show?: boolean;
    /** 坐标轴名称 */
    name?: string;
  };
  /** 系列配置 */
  series?: {
    /** 系列类型 */
    type?: string;
    /** 系列名称 */
    name?: string;
    /** 标签配置 */
    label?: {
      /** 是否显示标签 */
      show?: boolean;
      /** 标签位置 */
      position?: 'top' | 'left' | 'right' | 'bottom' | 'inside' | 'outside';
    };
  };
}

/** 动态图表组件属性接口 */
interface ChartTypeProps {
  /** 图表类型 */
  chartType: ChartTypes;
  /** 图表配置 */
  config?: BaseChartConfig;
  /** 图表数据 */
  data?: BaseDataItem[] | SeriesDataItem;
  /** 图表颜色数组 */
  colors?: string[];
}

/** 事件参数接口 */
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

1. `chartType` 必须是已注册的图表组件名称，支持的类型包括：
   - `line1`: 单线图
   - `lineN`: 多线图
   - `bar1`: 单柱状图
   - `barN`: 多柱状图
   - `pie2d`: 2D饼图
   - `pie3d`: 3D饼图
   - `cylinderBar1`: 单柱体图
   - `cylinderBarN`: 多柱体图
   - `prismBar1`: 单棱柱图
   - `prismBarN`: 多棱柱图
   - `stackPrismBar`: 堆叠棱柱图
   - `barAndLine`: 柱状折线图

2. `config` 和 `data` 的具体结构取决于所选的图表类型：
   - 折线图和柱状图使用 `SeriesDataItem` 数据格式
   - 饼图使用 `BaseDataItem[]` 数据格式

3. `colors` 数组的颜色值会按顺序应用到图表的各个部分：
   - 折线图：应用于每条线
   - 柱状图：应用于每组柱子
   - 饼图：应用于每个扇形区域

4. 组件会根据传入的 `chartType` 自动加载对应的图表组件。

5. 当切换图表类型时，组件会自动重新渲染。

6. 所有图表类型都支持基础的交互事件，如点击、悬停等。 