# 卡片

`cx-card` 卡片组件用例，模块化展示数据。

## 功能说明

1. 基于 Container 和 HeaderCard 组件进行扩展
2. 支持 可折叠、关闭
3. 支持 更换 Border
4. 支持 更换 Header

## 基础用法

使用 `title`, `size` 定义卡片。

```vue
<template>
  <cx-card
    size="default"
    closable
    :header="{title: '默认标题'}"
  >
    <template #header-preappend><span>前附加</span></template>
    <template #header-title><span>标题</span></template>
    <template #header-append><span>后附加</span></template>
    <div>
      <div>size - default - 默认尺寸</div>
      <div>closable - true - 可关闭</div>
      <div>foldable - true - 可折叠</div>
      <div>标题前后插槽</div>
    </div>
  </cx-card>
</template>
```

## 自定义样式

使用 `foldable="fasle"` 设置组件卡片不可折叠，`header`, `border`, `content`等属性定制样式.

```vue
<template>
  <cx-card
    size="small"
    :header="{
      align: 'left',
      icon: 'cx-icon cx-fi icon-AssignFunc fi-18',
      title: '左对齐-小',
      style: 'background: none; color: red;'
    }"
    :border="{
      style: 'fill: rgba(0,0,0,0.1)'
    }"
    :content="{
      style: 'padding: 20px;'
    }"
  >
    内容
  </cx-card>
</template>
```

## 引用 SVG 文件 定义异形

使用 `border-com`, `header`, `border`, `content`等属性定制样式**`border-com='cx-border-svg'`**

```vue
<template>
  <cx-card
    size="small"
    border-com="cx-border-svg"
    :border="{
      url: '/static/img/ui/coms/border/01.svg'
    }"
    :content="{
      style: 'padding: 20px;background:unset;'
    }"
  >
    内容
  </cx-card>
</template>
```

## 用 SVG 坐标 定义异形

使用 `border-com`, `header`, `border`, `content`等属性定制样式、布局等。**`border-com='cx-border-shape'`**

```vue
<template>
  <cx-card
    size="large"
    border-com="cx-border-shape"
    :border="{
      shape: (width, height) => {
        // SVG path 定义...
      }
    }"
    :content="{
      style: 'padding: 20px;background:unset;'
    }"
  >
    内容
  </cx-card>
</template>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| size | 尺寸 | String | large / default /small | default |
| title | 标题 | String | | |
| closable | 是否支持关闭 | Boolean | | false |
| foldable | 是否支持可折叠 | Boolean | | true |
| icon | 标题栏图标 CSS 类名，默认为空 | String | | |
| border-com | Border 组件名（边框和底纹） | String/Component | | cx-border-regular |
| header-com | Header 组件名（标题头） | String/Component | | cx-header-card |
| border | 组件 Border 的参数（请参考具体的组件传递） | Object | | |
| header | 组件 Header 的参数（请参考具体的组件传递） | Object | | |
| content | 组件 Content 的参数（请参考具体的组件传递） | Object | | |

## 插槽

| 名称 | 描述 | 参数 |
| ---- | --- | --- |
| default | 内容部分 | |
| header-preappend | 标题之前 | |
| header-append | 标题之后 | |
| header-title | 标题附加 | |

### 类型定义

```ts
interface CardHeaderProps {
  // 对齐方式
  align?: 'left' | 'center' | 'right';
  // 图标
  icon?: string;
  // 标题
  title?: string;
  // 自定义样式
  style?: string;
}

interface CardBorderProps {
  // 自定义样式
  style?: string;
  // SVG文件URL
  url?: string;
  // SVG形状函数
  shape?: (width: number, height: number) => string;
}

interface CardContentProps {
  // 自定义样式
  style?: string;
}

interface CardProps {
  // 尺寸
  size?: 'large' | 'default' | 'small';
  // 标题
  title?: string;
  // 是否支持关闭
  closable?: boolean;
  // 是否支持可折叠
  foldable?: boolean;
  // 标题栏图标 CSS 类名
  icon?: string;
  // Border 组件名（边框和底纹）
  borderCom?: string | any;
  // Header 组件名（标题头）
  headerCom?: string | any;
  // 组件 Border 的参数
  border?: CardBorderProps;
  // 组件 Header 的参数
  header?: CardHeaderProps;
  // 组件 Content 的参数
  content?: CardContentProps;
} 
```