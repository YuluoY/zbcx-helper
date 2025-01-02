# 自定义分屏组件

`cx-split-screen` 以表的形式展示数据。

## 基础用法

```vue
<template>
  <div>
    <p>自定义分屏案例，使用`cx-image-view`组件</p>
    <section class="section" style="height: 500px;  overflow: scroll;">
      <cx-split-screen :comList="comList"></cx-split-screen>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comList: [
        {
          com: 'cx-image-view',
          param: { src: '/static/file/奥特曼.jpg' }
        },
        {
          com: 'cx-image-view',
          param: { src: '/static/file/怪兽1.webp' }
        },
        {
          com: 'cx-image-view',
          param: { src: '/static/file/奥特曼.jpg' }
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  height: 250px;
  width: 700px;
}
</style>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | --- | ---- | ----- | ----- |
| comList | 组件配置集合，分屏数量等于comList的长度 | `Array<ComConfig>` | | |
| userRowNum | 分屏数量 | Number | | undefined |

### ComConfig 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | --- | ---- | ----- | ----- |
| com | component的is参数值，可以是Vue组件对象，也可以是已注册的组件名，如：'el-button' | String | | |
| param | 传递给组件的参数对象，会使用v-bind绑定到组件上 | Object | | |
| listeners | 传递给组件的事件监听对象，会使用v-on绑定到组件上 | Object | | |
| title | 组件标题，会放在组件标签内 | String | | |

## 类型定义

```ts
export interface ComConfig {
  // component的is参数值，可以是Vue组件对象，也可以是已注册的组件名，如：'el-button'
  com: string;
  // 传递给组件的参数对象，会使用v-bind绑定到组件上
  param?: Record<string, any>;
  // 传递给组件的事件监听对象，会使用v-on绑定到组件上
  listeners?: Record<string, any>;
  // 组件标题，会放在组件标签内
  title?: string;
}

export interface SplitScreenProps {
  // 组件配置集合，分屏数量等于comList的长度
  comList: ComConfig[];
  // 分屏数量
  userRowNum?: number;
}
``` 