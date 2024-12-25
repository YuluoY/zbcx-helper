# getPosSize

获取DOM节点的位置和大小信息。

## 语法

```javascript
cx.dom.getPosSize(dom)
```

## 参数

- `dom` (DOM): 要获取位置和大小的DOM节点

## 返回值

- `Object`: 包含节点位置和大小信息的对象,具有以下属性:
  - `x` (Number): 节点的X坐标
  - `yx` (Number): 节点的Y坐标
  - `wx` (Number): 节点的宽度
  - `hx` (Number): 节点的高度

## 描述

`getPosSize`方法用于获取指定DOM节点的位置和大小信息。该方法会返回一个包含节点的X坐标、Y坐标、宽度和高度信息的对象。

## 示例

```javascript
// 获取DOM节点
const element = cx.dom.byId('myElement');

// 获取节点位置和大小
const posSize = cx.dom.getPosSize(element);
console.log(posSize); // {x: 100, yx: 200, wx: 300, hx: 400}
```

## 参见

- [getSize](../getSize/README.md) - 获取DOM节点的大小 