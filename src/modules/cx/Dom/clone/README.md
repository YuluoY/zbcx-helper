# clone

克隆DOM节点。

## 语法

```javascript
static clone(dom)
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| dom | HTMLElement | 要克隆的DOM节点 |

## 返回值

| 类型 | 描述 |
|------|------|
| HTMLElement | 克隆后的DOM节点 |

## 描述

`clone` 方法用于创建DOM节点的副本。它会：

1. 创建指定DOM节点的深度克隆
2. 复制节点的所有属性和子节点
3. 返回新的克隆节点
4. 不会复制原节点的事件监听器

这个方法常用于：
- 复制现有的DOM结构
- 创建相同结构的多个元素
- 保存节点的备份
- 动态生成重复的UI元素

## 示例

```javascript
// 克隆简单元素
const original = cx.dom.byId('myElement');
const cloned = cx.dom.clone(original);
cx.dom.append(document.body, cloned);

// 克隆带子元素的节点
const container = cx.dom.byId('container');
const containerClone = cx.dom.clone(container);
containerClone.id = 'container-clone';
cx.dom.append(document.body, containerClone);

// 克隆并修改
const button = cx.dom.byId('submitBtn');
const buttonClone = cx.dom.clone(button);
buttonClone.textContent = '新按钮';
buttonClone.id = 'newBtn';
cx.dom.append(document.body, buttonClone);

// 克隆表单元素
const form = cx.dom.byId('myForm');
const formClone = cx.dom.clone(form);
formClone.id = 'myFormCopy';
// 注意：需要重新添加事件监听器
formClone.addEventListener('submit', handleSubmit);
cx.dom.append(document.body, formClone);
``` 