# byId

根据ID获取DOM节点。

## 语法

```javascript
static byId(id)
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| id | string | 要获取的DOM节点的ID |

## 返回值

| 类型 | 描述 |
|------|------|
| HTMLElement | 找到的DOM节点。如果未找到则返回null |

## 描述

`byId` 方法用于根据ID获取DOM节点。它会：

1. 调用 `document.getElementById()` 获取指定ID的DOM节点
2. 返回找到的节点或null
3. 提供一个简便的方式来获取DOM元素

这个方法常用于：
- 获取页面中的特定元素
- 操作DOM节点
- 修改元素属性和样式
- 添加事件监听器

## 示例

```javascript
// 获取单个元素
const myDiv = cx.dom.byId('myDiv');
if (myDiv) {
    myDiv.style.backgroundColor = 'red';
}

// 获取表单元素
const form = cx.dom.byId('loginForm');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // 处理表单提交
    });
}

// 获取并修改内容
const title = cx.dom.byId('pageTitle');
if (title) {
    title.textContent = '新标题';
}

// 获取并修改样式
const menu = cx.dom.byId('mainMenu');
if (menu) {
    menu.style.display = 'none';
}

// 获取并添加子元素
const container = cx.dom.byId('container');
if (container) {
    const newDiv = cx.dom.create('div', 'newDiv');
    cx.dom.append(container, newDiv);
}
``` 