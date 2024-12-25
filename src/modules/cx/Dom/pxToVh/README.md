# pxToVh

根据浏览器高度，把px转为视口vh值。用于计算根节点字体rem值，随视口自动变化。

## 语法

```js
cx.Dom.pxToVh(hpx)
```

## 参数

- `hpx` (Number): 高度，单位px。

## 返回值

- (Number): 转换成vh的值。

## 描述

该方法用于将像素(px)单位的高度值转换为相对于视口高度的vh单位值。这在响应式设计中非常有用,可以使元素高度相对于视口高度进行自适应缩放。

vh单位表示视口高度的百分比,1vh等于视口高度的1%。这个方法可以帮助你:
- 将固定像素值转换为响应式的vh值
- 实现基于视口高度的自适应布局
- 计算根节点字体大小,实现整体布局的缩放

## 示例

```js
// 假设视口高度为1000px
const vh50 = cx.Dom.pxToVh(500); // 返回50(vh),表示视口高度的50%
const vh25 = cx.Dom.pxToVh(250); // 返回25(vh),表示视口高度的25%

// 在CSS中使用
const element = cx.Dom.create('div');
cx.Dom.setStyle(element, {
    height: cx.Dom.pxToVh(600) + 'vh', // 60vh
    minHeight: cx.Dom.pxToVh(300) + 'vh' // 30vh
});

// 用于计算根节点字体大��
const rootFontSize = cx.Dom.pxToVh(16) + 'vh';
document.documentElement.style.fontSize = rootFontSize;
``` 