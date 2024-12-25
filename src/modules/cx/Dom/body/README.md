# body

获取body节点。

## 语法

```javascript
static body()
```

## 参数
无

## 返回值

| 类型 | 描述 |
|------|------|
| HTMLElement | 返回document.body对象 |

## 描述

`body` 方法用于获取文档的 `body` 元素。它会：

1. 返回 `document.body` 对象的引用
2. 提供一个简便的方式来访问页面的 body 元素
3. 常用于全局DOM操作和样式设置

## 示例

```javascript
// 获取body元素
const bodyElement = cx.dom.body();

// 修改body背景色
cx.dom.body().style.backgroundColor = '#f0f0f0';

// 添加类名
cx.dom.body().classList.add('dark-theme');

// 在body中添加新元素
const newDiv = cx.dom.create('div', 'newElement');
cx.dom.append(cx.dom.body(), newDiv);

// 设置body的其他样式
const body = cx.dom.body();
body.style.margin = '0';
body.style.padding = '0';
body.style.overflow = 'hidden';
``` 