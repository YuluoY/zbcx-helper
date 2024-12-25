# setZIndex

设置DOM节点的z-index值。

## 语法

```javascript
cx.dom.setZIndex(dom, zIndex)
```

## 参数

- `dom` (dom): 要设置z-index的DOM节点
- `zIndex` (Number): z-index值，用于控制元素的层叠顺序

## 返回值

无

## 描述

`setZIndex` 方法用于设置DOM节点的z-index值，控制元素在Z轴上的层叠顺序。它会：

1. 接收一个DOM节点和z-index值
2. 将z-index值应用到DOM节点上
3. 影响元素在页面上的显示层级

这个方法常用于：
- 控制弹出层的显示顺序
- 调整重叠元素的层级关系
- 确保特定元素始终显示在其他元素之上或之下
- 创建多层级的界面布局

## 示例

```javascript
// 基本使用
const element = cx.dom.byId('myElement');
cx.dom.setZIndex(element, 100);

// 创建弹出层
const dialog = cx.dom.create('div', 'dialog');
const mask = cx.dom.create('div', 'mask');
cx.dom.setZIndex(mask, 1000);
cx.dom.setZIndex(dialog, 1001); // 确保对话框在遮罩层上面

// 使用动态z-index值
const popup = cx.dom.create('div', 'popup');
cx.dom.setZIndex(popup, cx.Base.nextZIndex()); // 使��自动递增的z-index值
```

## 注意事项

- z-index只对定位元素（position不为static）生效
- 较大的z-index值会显示在较小值的元素之上
- z-index可以是负值，负值会显示在常规文档流之下
- 父元素的z-index会影响子元素的层叠顺序
- 建议使用合理的z-index值范围，避免值过大 