# 布局区域

`cx-region` 布局组件`cx-layout`的分区组件，布置页面。

布局的组成部分，由north、west、center、east、south几个部分组成。可以嵌套布局

- 是 `cx-layout` 布局的组成部分，可控制每个区域的间距。
- 在设置 `gutter` 分隔槽的 `region` 上，使用 `splitable` 属性完成拖拽。

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| region | 布局的区域 | String | north / west / center / east / south | |
| width | 宽度, east、west 两个 region 定义宽度，不传时根据内容自动填充，高度自适应父容器 | String | — | |
| height | 高度, north、south 两个 region 定义高度，不传时根据内容自动填充，宽度自适应父容器 | String | — | |
| style | 区域的附加样式 | String | — | |
| class | 区域的附加样式类 | String | — | |
| border | region 是否有边线，和区域的关系：north 下方、south 上方、west 右方、east 左方 | Boolean | — | false |
| gutter | region 间是否有分隔槽，和区域的关系：north 下方、south 上方、west 右方、east 左方 | Boolean | — | false |
| splitable | 分隔槽是否可拖拽，修改 region 尺寸，有 gutter 时才生效 | Boolean | — | false |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ----- | ----- | ----- | ----- |
| drag-over | 分隔条拖拽结束消息 | ({offset, regSize}) | offset 是拖拽的偏移量，regSize 是区域的尺寸 |

## 插槽

| 名称 | 描述 | 参数 |
| ---- | --- | --- |
| default | 内容部分 | |

## 类型定义

```ts
export interface RegionProps {
  /** 布局的区域 */
  region: 'north' | 'west' | 'center' | 'east' | 'south';
  /** 宽度, east、west 两个 region 定义宽度，不传时根据内容自动填充，高度自适应父容器 */
  width?: string;
  /** 高度, north、south 两个 region 定义高度，不传时根据内容自动填充，宽度自适应父容器 */
  height?: string;
  /** 区域的附加样式 */
  style?: string;
  /** 区域的附加样式类 */
  class?: string;
  /** region 是否有边线，和区域的关系：north 下方、south 上方、west 右方、east 左方 */
  border?: boolean;
  /** region 间是否有分隔槽，和区域的关系：north 下方、south 上方、west 右方、east 左方 */
  gutter?: boolean;
  /** 分隔槽是否可拖拽，修改 region 尺寸，有 gutter 时才生效 */
  splitable?: boolean;
}

export interface DragOverEvent {
  /** 拖拽的偏移量 */
  offset: number;
  /** 区域的尺寸 */
  regSize: number;
}
```
