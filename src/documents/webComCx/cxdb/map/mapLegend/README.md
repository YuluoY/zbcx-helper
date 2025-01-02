# MapLegend 地图图例组件

MapLegend地图图例组件。

## 基础用法

```vue
<template>
  <cx-map-legend
    eventPrefix="MapLegend"
    :defFold="false"
    :autoOpen="true"
    :legendOption="{}"
  />
</template>
```

## Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| eventPrefix | String | MapLegend | 推送消息名的前缀 |
| defFold | Boolean | false | 是否默认收缩卡片 |
| autoOpen | Boolean | true | 是否在添加图例时自动展开卡片面板 |
| legendOption | Object | - | 传递给cx-legend组件的自定义参数对象 |

## 类型定义

```ts
interface MapLegendProps {
  /** 
   * 推送消息名的前缀
   * @default MapLegend
   */
  eventPrefix?: string;

  /**
   * 是否默认收缩卡片
   * @default false
   */
  defFold?: boolean;

  /**
   * 是否在添加图例时自动展开卡片面板
   * @default true
   */
  autoOpen?: boolean;

  /**
   * 传递给cx-legend组件的自定义参数对象
   */
  legendOption?: Record<string, any>;
} 
```