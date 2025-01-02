# 静态数据管理

`cx-data-man-static` 静态数据管理(基于 DataMan2 完成数据表展示，支持分页、功能按钮和操作列)

## 基础用法

传入参数flds和data,自动构造列头和数据表格。

```vue
<template>
  <cx-data-man-static v-bind="param"></cx-data-man-static>
</template>

<script>
export default {
  data() {
    return {
      param: {
        flds: [
          { colname: 'col1', namec: '列1' }, 
          { colname: 'col2', namec: '列2' }
        ],
        data: [
          { col1: 234, col2: 34343 }, 
          { col1: 234, col2: 34343 }
        ]
      }
    }
  }
}
</script>
```

## 使用查询功能

通过设置字段的`qrylevel`属性和`param.showExp`来启用查询功能。

```vue
<template>
  <cx-data-man-static v-bind="param"></cx-data-man-static>
</template>

<script>
export default {
  data() {
    return {
      param: {
        flds: [
          { colname: 'name', namec: '名称', qrylevel: 1 }, 
          { colname: 'value', namec: '数量' }
        ],
        data: [
          { name: 'Mon', value: 120 },
          { name: 'Tue', value: 200 },
          { name: 'Wed', value: 150 },
          { name: 'Thu', value: 80 },
          { name: 'Fri', value: 70 },
          { name: 'Sat', value: 110 },
          { name: 'Sun', value: 130 }
        ],
        param: {
          showExp: true
        }
      }
    }
  }
}
</script>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| **flds** | 自定义字段配置集合 | `Array` | | |
| **data** | 静态数据集合 | `Array` | | |
| filterData | 自定义数据过滤钩子函数，会在每次数据更新时调用（初始化、翻页等） | `Function` | | |
| autoScroll | 是否开始表格自动滚动 | `Boolean` | | false |
| speed | 自动滚动的速度，默认为1，即每秒10像素 | `Number` | | 1 |
| param | cx-tabs组件可接收的参数对象 | `Object` | | |
| listeners | cx-tabs组件可接收的事件监听对象 | `Object` | | |

## 类型定义

```ts
/** 字段配置 */
interface FieldConfig {
  /** 列名 */
  colname: string;
  /** 中文名称 */
  namec: string;
  /** 查询级别 */
  qrylevel?: number;
}

/** 数据管理组件参数 */
interface DataManParams {
  /** 是否显示查询条件 */
  showExp?: boolean;
}

/** 静态数据管理组件Props */
interface DataManStaticProps {
  /** 自定义字段配置集合 */
  flds: FieldConfig[];
  /** 静态数据集合 */
  data: any[];
  /** 自定义数据过滤钩子函数，会在每次数据更新时调用（初始化、翻页等） */
  filterData?: (data: any[]) => any[];
  /** 是否开始表格自动滚动 */
  autoScroll?: boolean;
  /** 自动滚动的速度，默认为1，即每秒10像素 */
  speed?: number;
  /** cx-tabs组件可接收的参数对象 */
  param?: DataManParams;
  /** cx-tabs组件可接收的事件监听对象 */
  listeners?: Record<string, Function>;
} 
```