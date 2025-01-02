# 热门推荐展示

`cx-rec` 热门推荐组件。

## 基础用法

使用 `datas` 传递数据列表，通过 `componentType` 控制组件类型。

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| --------- | --------------------------- | ---------------- | --------------------- | ------ |
| size | 尺寸 | String | large / default / small | default |
| list | 自动滚动数据列表 | Array | | [] |
| hover | 自动滚动时鼠标移上去是否暂停 | Boolean | | true |
| step | 自动滚动的速度 | Number | | 0.5 |
| datas | 传递给组件的参数 | Array<RecItem> | | |
| elAtts | vue3-seamless-scroll原生属性 | Object | | null |
| attCom | 传入的组件 | Object | | null |
| componentType | 组件类型 | String | icon / num / scroll | icon |
| showTip | 是否显示悬浮文字提示 | Boolean | | false |
| showBackground | 是否显示背景 | Boolean | | false |
| bgColor | 背景颜色 | String | | #fff |

## RecItem 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| --------------- | -------- | ------ | ------ | ----- |
| headType | 头部件类型 | String | index, img | |
| footType | 尾部件类型 | String | index, img, text, btn | |
| title | 标题内容 | String | | |
| headImg | 当headType为img时的图片路径 | String | | |
| footImg | 当footType为img时的图片路径 | String | | |
| rtitle | 当footType为text时的标题内容 | String | | |
| btnText | 当footType为btn时的按钮名称 | String | | |
| indexColor | 序号颜色 | String | | |
| fontColor | 字体颜色 | String | | |
| bgColor | 背景颜色 | String | | |

## 插槽

| 名称 | 说明 | 参数 |
| ---------- | --------------- | ---- |
| header_content | 头部插槽 | data |
| body_content | 中间内容插槽 | data |
| footer_content | 尾部插槽 | data |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ---------- | --------------- | ---- | -------- |
| rec-click | 点击查看详细内容 | data | |
| btn-click | 点击按钮事件 | data | |

## 类型定义

```ts
export interface RecItem {
  /** 头部件类型 */
  headType?: 'index' | 'img';
  /** 尾部件类型 */
  footType?: 'index' | 'img' | 'text' | 'btn';
  /** 标题内容 */
  title: string;
  /** 当headType为img时的图片路径 */
  headImg?: string;
  /** 当footType为img时的图片路径 */
  footImg?: string;
  /** 当footType为text时的标题内容 */
  rtitle?: string;
  /** 当footType为btn时的按钮名称 */
  btnText?: string;
  /** 序号颜色 */
  indexColor?: string;
  /** 字体颜色 */
  fontColor?: string;
  /** 背景颜色 */
  bgColor?: string;
}

export interface RecProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 自动滚动数据列表 */
  list?: any[];
  /** 自动滚动时鼠标移上去是否暂停 */
  hover?: boolean;
  /** 自动滚动的速度 */
  step?: number;
  /** 传递给组件的参数 */
  datas: RecItem[];
  /** vue3-seamless-scroll原生属性 */
  elAtts?: Record<string, any>;
  /** 传入的组件 */
  attCom?: Record<string, any>;
  /** 组件类型 */
  componentType?: 'icon' | 'num' | 'scroll';
  /** 是否显示悬浮文字提示 */
  showTip?: boolean;
  /** 是否显示背景 */
  showBackground?: boolean;
  /** 背景颜色 */
  bgColor?: string;
}
```
