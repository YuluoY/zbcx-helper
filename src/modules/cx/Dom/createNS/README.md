# createNS

用命名空间方式创建DOM节点。

## 语法

```javascript
static createNS(NS, type, className, parentDom, atts)
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| NS | string | 命名空间URI |
| type | string | 要创建的DOM节点类型 |
| className | string | CSS类名 |
| parentDom | HTMLElement | 父节点 |
| atts | Object | 节点属性对象，可以设置style等属性 |

## 返回值

| 类型 | 描述 |
|------|------|
| HTMLElement | 创建的DOM节点 |

## 描述

`createNS` 方法用于创建带有命名空间的DOM节点。它会：

1. 使用指定的命名空间创建DOM节点
2. 设置节点的类名
3. 应用指定的属性（包括样式）
4. 如果提供了父节点，将新节点添加到父节点中
5. 返回创建的节点

这个方法常用于：
- 创建SVG元素
- 创建MathML元素
- 创建其他需要命名空间的XML元素
- 处理特定的XML文档

## 示例

```javascript
// 创建SVG元素
const svgNS = 'http://www.w3.org/2000/svg';
const svg = cx.dom.createNS(svgNS, 'svg', 'chart', document.body, {
    width: '100',
    height: '100'
});

// 创建SVG圆形
const circle = cx.dom.createNS(svgNS, 'circle', 'dot', svg, {
    cx: '50',
    cy: '50',
    r: '40',
    fill: 'red'
});

// 创建SVG矩形
const rect = cx.dom.createNS(svgNS, 'rect', 'box', svg, {
    x: '10',
    y: '10',
    width: '80',
    height: '80',
    stroke: 'blue',
    'stroke-width': '2',
    fill: 'none'
});

// 创建SVG文本
const text = cx.dom.createNS(svgNS, 'text', 'label', svg, {
    x: '50',
    y: '50',
    'text-anchor': 'middle',
    'dominant-baseline': 'middle',
    fill: 'white'
});
text.textContent = 'SVG';

// 创建MathML元素
const mathNS = 'http://www.w3.org/1998/Math/MathML';
const math = cx.dom.createNS(mathNS, 'math', 'formula', document.body);
const msup = cx.dom.createNS(mathNS, 'msup', '', math);
const mi = cx.dom.createNS(mathNS, 'mi', '', msup);
mi.textContent = 'x';
const mn = cx.dom.createNS(mathNS, 'mn', '', msup);
mn.textContent = '2';
``` 