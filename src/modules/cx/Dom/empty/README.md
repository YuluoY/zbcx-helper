# empty

清空DOM节点的内部HTML内容。

## 语法

```javascript
cx.dom.empty(dom)
```

## 参数

- `dom` (DOM): 要清空内容的DOM节点

## 返回值

无

## 描述

`empty`方法用于清空指定DOM节点的内部HTML内容。这个方法会移除该节点的所有子节点和文本内容,但保留节点本身。

## 示例

```javascript
// 获取要清空的DOM节点
const container = cx.dom.byId('container');

// 清空节点内容
cx.dom.empty(container);
```

## 参见

- [append](../append/README.md) - 添加DOM节点
- [remove](../remove/README.md) - 移除DOM节点 