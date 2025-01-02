# 分组

`cx-group` 卡片组件用例，模块化展示数据。

## 基础用法

使用 `title`, `size` 定义卡片。

```vue
<template>
  <cx-group title="默认分组" style="width: 700px; height: 200px !important">
    <div>内容区域</div>
  </cx-group>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>
```

## 自定义样式

使用 `header`, `border` 定义样式。

```vue
<template>
  <cx-group title="分组2" style="width: 700px; height: 200px !important"
    :header="header">
    <template #header-preappend><span>之前</span></template>
    <template #header-title><span>-用户</span></template>
    <template #header-append><span>之后</span></template>
    <div>
      标题插槽
      <br>
      头部 header 样式
    </div>
  </cx-group>
</template>

<script>
export default {
  data() {
    return {
      header: {
        align: 'center',
        icon: 'cx-icon cx-fi icon-AssignFunc fi-18',
        title: '中间对齐-中'
      }
    }
  }
}
</script>
```

## 自定义border

使用 `border-com` 定义边框组件。

```vue
<template>
  <cx-group title="分组2" style="width: 700px; height: 200px !important"
    :header="header"
    :borderCom=borderCom>
    <template #header-preappend><span>之前</span></template>
    <template #header-title><span>-用户</span></template>
    <template #header-append><span>之后</span></template>
    <div>
      标题插槽
      <br>
      头部 header 样式
      <br>
      borderCom="{{borderCom}}"
    </div>
    <br>
    <el-button style="width:1rem;" @click="changetBoder">切换border</el-button>
  </cx-group>
</template>

<script>
export default {
  data() {
    return {
      header: {
        align: 'center',
        icon: 'cx-icon cx-fi icon-AssignFunc fi-18',
        title: '中间对齐-中'
      },
      borderCom: 'cx-border-group'
    }
  },
  methods: {
    changetBoder() {
      this.borderCom = this.borderCom === 'cx-border-group' ? 'cx-border-regular' : 'cx-border-group'
    }
  }
}
</script>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| size | 尺寸 | String | large / default /small | default |
| **title** | 标题 | String | | |
| border-com | Border 组件名（边框和底纹） | String | | cx-border-regular |
| header-com | Header 组件名（标题头） | String | | cx-header-group |
| border | 组件 Border 的参数（请参考具体的组件传递） | Object | | |
| header | 组件 Header 的参数（请参考具体的组件传递） | Object | | |
| content | 组件 Content 的参数（请参考具体的组件传递） | Object | | |
| direction | 控制内容方向 | String | vertical/horizontal | vertical |

## 插槽

| 名称 | 描述 | 参数 |
| ---- | --- | --- |
| default | 内容部分 | |
| header-preappend | 标题之前 | |
| header-append | 标题之后 | |
| header-title | 标题附加 | |

## 类型定义

```ts
export interface GroupProps {
  // 尺寸
  size?: 'large' | 'default' | 'small';
  // 标题
  title: string;
  // Border 组件名（边框和底纹）
  borderCom?: string;
  // Header 组件名（标题头）
  headerCom?: string;
  // 组件 Border 的参数（请参考具体的组件传递）
  border?: Record<string, any>;
  // 组件 Header 的参数（请参考具体的组件传递）
  header?: Record<string, any>;
  // 组件 Content 的参数（请参考具体的组件传递）
  content?: Record<string, any>;
  // 控制内容方向
  direction?: 'vertical' | 'horizontal';
}
``` 