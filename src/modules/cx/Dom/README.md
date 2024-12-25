# Dom

DOM操作工具类，提供了一系列用于DOM操作和计算的静态方法。

## 方法

### [append](append/README.md)
添加DOM节点。

### [banDefaultContextMenu](banDefaultContextMenu/README.md)
禁用默认右键菜单。

### [body](body/README.md)
获取body节点。

### [byId](byId/README.md)
根据ID取DomNode结点。

### [clone](clone/README.md)
克隆DOM节点。

### [create](create/README.md)
创建DOM节点。

### [createNS](createNS/README.md)
创建带命名空间的DOM节点。

### [empty](empty/README.md)
清空DOM节点。

### [getDomNode](getDomNode/README.md)
获取DOM节点。

### [getPosSize](getPosSize/README.md)
获取DOM节点的位置和大小。

### [getSize](getSize/README.md)
获取DOM节点的大小。

### [pxToRem](pxToRem/README.md)
像素值转换为rem值。

### [pxToVh](pxToVh/README.md)
像素值转换为vh值。

### [pxToVw](pxToVw/README.md)
像素值转换为vw值。

### [remove](remove/README.md)
移除DOM节点。

### [resizeLayout](resizeLayout/README.md)
调整布局大小。

### [setStyle](setStyle/README.md)
设置DOM节点样式��

### [setZIndex](setZIndex/README.md)
设置DOM节点的z-index值。

### [testBrowser](testBrowser/README.md)
测试浏览器类型。

### [testWebgl](testWebgl/README.md)
测试WebGL支持。

## 示例

```javascript
// 创建DOM节点
const div = cx.dom.create('div', 'my-class', parentNode, {
    id: 'myDiv',
    style: 'color: red;'
});

// 获取DOM节点
const node = cx.dom.byId('myDiv');

// 设置样式
cx.dom.setStyle(node, {
    width: '100px',
    height: '100px',
    backgroundColor: 'blue'
});

// 添加到父节点
cx.dom.append(parentNode, node);

// 克隆节点
const clone = cx.dom.clone(node);

// 移除节点
cx.dom.remove(clone);

// 单位转换
const remValue = cx.dom.pxToRem(16); // 1rem
const vhValue = cx.dom.pxToVh(100); // 相对视口高度的值
const vwValue = cx.dom.pxToVw(100); // 相对视口宽度的值