# append

将DOM节点添加到父节点中。

## 语法

```javascript
cx.dom.append(children, dom)
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| children | Array/HTMLElement | 可以是数组，也可以是单个DOM节点 |
| dom | HTMLElement | 父节点DOM |

## 返回值

| 类型 | 描述 |
|------|------|
| void | 无返回值 |

## 描述

`append` 方法用于将一个或多个DOM节点添加到指定的父节点中。它会:

1. 检查子节点和父节点的有效性
2. 如果children是数组，则添加多个子节点
3. 如果children是单个DOM节点，则直接添加该节点
4. 所有添加的节点都会成为父节点的子元素

这个方法常用于:
- 动态添加单个或多个DOM元素
- 构建DOM树结构
- 插入新的UI组件
- 动态创建和组装界面元素

## 示例

```javascript
// 添加单个元素
const newDiv = cx.dom.create('div', 'my-class', null, {
    id: 'newDiv',
    innerHTML: '这是新添加的内容'
});
const container = cx.dom.byId('container');
cx.dom.append(newDiv, container);

// 添加多个元素
const items = ['项目1', '项目2', '项目3'].map(item => 
    cx.dom.create('div', 'item', null, {
        innerHTML: item
    })
);
cx.dom.append(items, container);

// 创建复杂的UI组件
function createCard(title, content) {
    const card = cx.dom.create('div', 'card');
    const titleDiv = cx.dom.create('div', 'card-title', null, {
        innerHTML: title
    });
    const contentDiv = cx.dom.create('div', 'card-content', null, {
        innerHTML: content
    });
    
    cx.dom.append([titleDiv, contentDiv], card);
    return card;
}

const card = createCard('标题', '内容');
cx.dom.append(card, container);

// 添加到body元素
const mainContainer = cx.dom.create('div', 'main-container');
cx.dom.append(mainContainer, cx.dom.body());

// 创建并添加全局提示
function showGlobalTip(message) {
    const tip = cx.dom.create('div', 'global-tip', null, {
        innerHTML: message,
        style: `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            padding: 10px 20px;
            background: #333;
            color: white;
            border-radius: 4px;
        `
    });
    cx.dom.append(tip, cx.dom.body());
    
    setTimeout(() => {
        cx.dom.remove(tip);
    }, 3000);
}
``` 