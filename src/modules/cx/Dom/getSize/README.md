# getSize

获取DOM节点的大小。

## 语法

```javascript
cx.dom.getSize(dom)
```

## 参数

- `dom` (DOM): 要获取大小的DOM节点

## 返回值

- `Object`: 包含节点大小信息的对象

## 描述

`getSize`方法用于获取指定DOM节点的大小信息。该方法会返回一个包含节点宽度和高度信息的对象。

## 示例

```javascript
// 获取DOM节点
const element = cx.dom.byId('myElement');

// 获取节点大小
const size = cx.dom.getSize(element);
console.log(size); // {width: 100, height: 200}
```

## 参见

- [getPosSize](../getPosSize/README.md) - 获取DOM节点的位置和大小 