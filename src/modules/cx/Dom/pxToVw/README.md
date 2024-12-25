# pxToVw

根据浏览器宽度，把px转为视口vw值。用于计算根节点字体rem值，随视口自动变化。

## 语法

```js
cx.Dom.pxToVw(wpx)
```

## 参数

- `wpx` (Number): 宽度，单位px。

## 返回值

- (Number): 转换成vw的值。

## 描述

该方法用于将像素(px)单位的宽度值转换为相对于视口宽度的vw单位值。这在响应式设计中非常有用,可以使元素宽度相对于视口宽度进行自适应缩放。

vw单位表示视口宽度的百分比,1vw等于视口宽度的1%。这个方法可以帮助你:
- 将固定像素值转换为响应式的vw值
- 实现基于视口宽度的自适应布局
- 计算根节点字体大小,实现整体布局的缩放

## 示例

```js
// 假设视口宽度为1000px
const vw50 = cx.Dom.pxToVw(500); // 返回50(vw),表示视口宽度的50%
const vw25 = cx.Dom.pxToVw(250); // 返回25(vw),表示视口宽度的25%

// 在CSS中使用
const element = cx.Dom.create('div');
cx.Dom.setStyle(element, {
    width: cx.Dom.pxToVw(600) + 'vw', // 60vw
    minWidth: cx.Dom.pxToVw(300) + 'vw' // 30vw
});

// 用于计算根节点字体大小
const rootFontSize = cx.Dom.pxToVw(16) + 'vw';
document.documentElement.style.fontSize = rootFontSize;
``` 