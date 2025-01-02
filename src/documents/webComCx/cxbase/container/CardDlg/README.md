# 卡片对话框

`cx-card-dlg` 卡片对话框组件用例，在卡片 `cx-card` 的基础上增加了对话框特性，侧边栏特性。

## 功能说明
1. 基于 Container 和 HeaderCard 组件进行扩展
2. 支持 可折叠、最小化，关闭
3. 支持 更换 Border
4. 支持 更换 Header

## 基础用法

使用 `header`, `size` 定义卡片对话框。

```vue
<template>
  <cx-card-dlg style="width:700px; height:200px"
    :header="{
      align: 'left',
      title: '折叠+最小化+关闭'
    }"
  >
    <div>
      size - default
      <br>
      有折叠、最小化、关闭
      <br>
      自定义 header 样式
    </div>
  </cx-card-dlg>
</template>
```

## 侧边 tab 选项卡

以 `v-solt` 的形式增加插槽组件，插槽名就是选项卡名。使用 `titleFolded="false"` 设置折叠是显示全部选项卡标题。

```vue
<template>
  <cx-card-dlg
    size="small"
    style="width:700px; height:220px"
    :foldable="true"
    :minable="false"
    :closable="false"
    :titleFolded="false"
    :minFoldStyle="'position: absolute;right: 6px;bottom: 6px;'"
    :header="{
      align: 'left',
      title: '折叠+ 不折叠标题+ 折叠后靠底部'
    }"
  >
    <template v-slot:标签一>
      <div>标签1: 可折叠 &nbsp;折叠显示标题 &nbsp;最小化&nbsp;可关闭</div>
    </template>
    <template v-slot:标签二>
      <div>这是标签二的内容区域</div>
    </template>
    <template v-slot:标签三>
      <div>这是标签三的内容区域</div>
    </template>
  </cx-card-dlg>
</template>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| size | 尺寸 | String | large / default /small | default |
| closable | 是否可以关闭 | Boolean | — | true |
| minable | 是否可以最小化 | Boolean | — | true |
| foldable | 是否支持可折叠 | Boolean | — | true |
| titleFolded | 折叠时只显示当前选项卡标题，false时显示全部 | Boolean | — | true |
| tabPosition | tab选项卡的位置，一个选项卡时不显示 | String | left / right | left |
| minFoldStyle | 折叠或最小化时样式，可设置位置 | String | | |
| minTooltip | 最小化或折叠的时候标题的el-tooltip参数对象 | Object | | |
| defFold | 是否默认折叠 | Boolean | | false |
| defMin | 是否默认最小化 | Boolean | | false |
| borderCom | Border 组件名（边框和底纹） | String/Component | — | cx-border-regular |
| headerCom | Header 组件名（标题头） | String/Component | — | cx-header-card |
| border | 组件 Border 的参数（请参考具体的组件传递） | Object | — | — |
| header | 组件 Header 的参数（请参考具体的组件传递） | Object | — | — |
| content | 组件 Content 的参数（请参考具体的组件传递） | Object | — | — |

## 插槽

| 名称 | 描述 | 参数 |
| ---- | --- | --- |
| default | 内容部分 | |
| header-preappend | 标题之前 | |
| header-append | 标题之后 | |
| header-title | 标题附加 | |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ----- | ----- | ----- | ----- |
| min | 最小化时 | | |
| max | 从最小化还原为正常界面时 | | |
| folded | 折叠状态发生变化 | | |

### 类型定义

```ts
interface CardDlgHeaderProps {
  // 对齐方式
  align?: 'left' | 'center' | 'right';
  // 标题
  title?: string;
  // 自定义样式
  style?: string;
}

interface CardDlgBorderProps {
  // 自定义样式
  style?: string;
}

interface CardDlgContentProps {
  // 自定义样式
  style?: string;
}

interface CardDlgProps {
  // 尺寸
  size?: 'large' | 'default' | 'small';
  // 是否可以关闭
  closable?: boolean;
  // 是否可以最小化
  minable?: boolean;
  // 是否支持可折叠
  foldable?: boolean;
  // 折叠时只显示当前选项卡标题，false时显示全部
  titleFolded?: boolean;
  // tab选项卡的位置，一个选项卡时不显示
  tabPosition?: 'left' | 'right';
  // 折叠或最小化时样式，可设置位置
  minFoldStyle?: string;
  // 最小化或折叠的时候标题的el-tooltip参数对象
  minTooltip?: Record<string, any>;
  // 是否默认折叠
  defFold?: boolean;
  // 是否默认最小化
  defMin?: boolean;
  // Border 组件名（边框和底纹）
  borderCom?: string | any;
  // Header 组件名（标题头）
  headerCom?: string | any;
  // 组件 Border 的参数
  border?: CardDlgBorderProps;
  // 组件 Header 的参数
  header?: CardDlgHeaderProps;
  // 组件 Content 的参数
  content?: CardDlgContentProps;
} 
```