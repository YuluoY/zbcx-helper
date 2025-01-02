# SwiperSlide 轮播图

`cx-swiper-slide` 轮播图组件。

## 基础用法

使用 `dataList` 传递数据列表，通过 `slidesPerView` 控制每页展示个数。

## 中间焦点展示

设置 `centeredSlides` 为 `true` 可以启用中间焦点展示模式，此时每页固定展示3个，中间大两边小。

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| -----| --- | -----| --- | ---- |
| size | 尺寸 | String | large / default / small | default |
| slidesPerView | 每页展示个数 | Number | | 4 |
| spaceBetween | 卡片间隔 | String | | '0%' |
| centeredSlides | 是否为中间激活展示（中间大两边小,固定每页展示3） | Boolean | | false |
| dataList | 使用插槽传对应组件参数的数组对象 | Array | | |
| atts | swiper原生参数 | Object | | |

## 插槽

| 名称 | 说明 | 参数 |
| ---- | --- | --- |
| card | 卡片插槽 | data |

## 类型定义

```ts
export interface SwiperSlideProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 每页展示个数 */
  slidesPerView?: number;
  /** 卡片间隔 */
  spaceBetween?: string;
  /** 是否为中间激活展示（中间大两边小,固定每页展示3） */
  centeredSlides?: boolean;
  /** 使用插槽传对应组件参数的数组对象 */
  dataList: any[];
  /** swiper原生参数 */
  atts?: Record<string, any>;
}
```
