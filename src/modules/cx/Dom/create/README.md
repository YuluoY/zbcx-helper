# create

创建DOM节点。

## 语法

```javascript
static create(type, className, parentDom, atts)
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| type | string | 要创建的DOM节点类型，如 'div' 或 'a' |
| className | string | CSS类名 |
| parentDom | HTMLElement | 父节点 |
| atts | Object | 节点属性对象，可以设置style等属性 |

## 返回值

| 类型 | 描述 |
|------|------|
| HTMLElement | 创建的DOM节点 |

## 描述

`create` 方法用于创建新的DOM节点。它会：

1. 创建指定类型的DOM节点
2. 设置节点的类名
3. 应用指定的属性（包括样式）
4. 如果提供了父节点，将新节点添加到父节点中
5. 返回创建的节点

这个方法常用于：
- 动态创建页面元素
- 构建复杂的DOM结构
- 添加新的UI组件
- 生成表单元素

## 示例

```javascript
// 创建简单的div元素
const div = cx.dom.create('div', 'my-class');

// 创建带属性的元素
const button = cx.dom.create('button', 'btn-primary', null, {
    id: 'submitBtn',
    type: 'submit',
    textContent: '提交'
});

// 创建带样式的元素
const box = cx.dom.create('div', 'box', document.body, {
    style: {
        width: '100px',
        height: '100px',
        backgroundColor: 'blue'
    }
});

// 创建表单元素
const form = cx.dom.create('form', 'login-form', document.body, {
    id: 'loginForm',
    method: 'post'
});

// 创建输入框
const input = cx.dom.create('input', 'form-input', form, {
    type: 'text',
    placeholder: '请输入用户名',
    required: true
});

// 创建带链接的元素
const link = cx.dom.create('a', 'nav-link', null, {
    href: '#',
    textContent: '点击这里',
    target: '_blank'
});

// 创建嵌套结构
const container = cx.dom.create('div', 'container');
const header = cx.dom.create('header', 'header', container);
const main = cx.dom.create('main', 'main-content', container);
const footer = cx.dom.create('footer', 'footer', container);
``` 