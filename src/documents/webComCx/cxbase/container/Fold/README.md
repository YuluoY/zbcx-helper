# 折叠

`cx-fold` 折叠组件用例，模块化展示数据。

## 基础用法

使用 `title`, `size` 定义卡片。

```vue
<template>
  <cx-fold style="width: 700px; height: 250px" title="折叠组件"
    :data="data"
    :header="header"
    :border="border"
    :content="content">
    <template #header-preappend>
      <span style="margin-right: 8px">前附加</span>
    </template>
    <template #header-title>
      <span>-附加文本</span>
    </template>
    <template #header-append>
      <span style="margin-right: 8px">后附加</span>
    </template>
    <div>内容区域</div>
  </cx-fold>
</template>

<script>
export default {
  data() {
    return {
      header: {
        align: 'left',
        icon: 'cx-icon cx-fi icon-AssignFunc fi-18',
        style: 'color: red;'
      },
      border: {
        style: 'fill: rgba(0,0,0,0.1)'
      },
      content: {
        style: 'padding: 20px'
      },
      data: [
        { name: '用户', com: 'cx-button', def: {} }
      ]
    }
  }
}
</script>
```

## 嵌套折叠

使用内容插槽嵌套折叠组件。

```vue
<template>
  <cx-fold style="width: 700px; height: 250px"
    v-bind="fold"
    @fold-change="onFoldClick"
    @add-click="onAdd">
    <cx-fold v-bind="fold2" @fold-change="onFoldClick2" @add-click="onAdd">
      这是内容
    </cx-fold>
  </cx-fold>
</template>

<script>
export default {
  data() {
    return {
      fold: {
        title: '折叠组件',
        folded: false,
        addable: true
      },
      fold2: {
        title: '子折叠组件',
        folded: false,
        addable: true
      }
    }
  },
  methods: {
    onFoldClick() {
      this.fold.folded = !this.fold.folded
    },
    onFoldClick2() {
      this.fold2.folded = !this.fold2.folded
    },
    onAdd() {
      this.$showMsg('成功', 'success')
    }
  }
}
</script>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| size | 尺寸 | String | large / default /small | default |
| **title** | 标题(必传) | String | | |
| folded | 是否支持可折叠 | Boolean | | true |
| addable | 是否显示增加按钮 | Boolean | | false |
| icon | 标题栏图标，默认为空 | String | | false |
| data | 插件数据 | `PlugCfg` | | |
| border-com | Border 组件名（边框和底纹） | String | | cx-border-regular |
| header-com | Header 组件名（标题头） | String | | cx-header-card |
| border | 组件 Border 的参数（请参考具体的组件传递） | Object | | |
| header | 组件 Header 的参数（请参考具体的组件传递） | Object | | |
| content | 组件 Content 的参数（请参考具体的组件传递） | Object | | |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ----- | ----- | ----- | ----- |
| fold-change | 折叠状态变化 | (name) | name: String 当前折叠名称标识 |
| add-click | 点击添加 | (name) | name: String 当前折叠名称标识 |

## 插槽

| 名称 | 描述 | 参数 |
| ---- | --- | --- |
| default | 内容部分 | |
| header-preappend | 标题之前 | |
| header-append | 标题之后 | |
| header-title | 标题附加 | |

## 类型定义

```ts
export interface PlugCfg {
  // 名称
  name: string;
  // 插件的注册组件
  com: object;
  // 插件的定义
  def: object;
  // 传递给插件的参数
  params?: object;
}

export interface FoldProps {
  // 尺寸
  size?: 'large' | 'default' | 'small';
  // 标题(必传)
  title: string;
  // 是否支持可折叠
  folded?: boolean;
  // 是否显示增加按钮
  addable?: boolean;
  // 标题栏图标，默认为空
  icon?: string;
  // 插件数据
  data?: PlugCfg;
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
}
``` 