# pxToRem

把像素px值转化为基于根节点字体大小的rem值。

## 语法

```js
cx.Dom.pxToRem(wpx)
```

## 参数

- `wpx` (Number): 宽度，单位px。默认值为0。

## 返回值

- (Number): 转换成rem的值。

## 描述

该方法用于将像素(px)单位的值转换为相对于根元素字体大小的rem单位值。这在响应式设计中非常有用,可以使元素大小相对于根元素字体大小进行缩放。

## 示例

```js
// 假设根元素字体大小为16px
const remValue = cx.Dom.pxToRem(32); // 返回2(rem)
const smallRemValue = cx.Dom.pxToRem(8); // 返回0.5(rem)

// 在CSS中使用
const element = cx.Dom.create('div');
cx.Dom.setStyle(element, {
    width: cx.Dom.pxToRem(160) + 'rem', // 10rem
    height: cx.Dom.pxToRem(80) + 'rem'  // 5rem
});
``` 