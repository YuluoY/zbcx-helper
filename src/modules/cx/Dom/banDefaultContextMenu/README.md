# banDefaultContextMenu

禁用默认右键菜单。

## 语法

```javascript
static banDefaultContextMenu()
```

## 参数

无

## 返回值

无

## 描述

`banDefaultContextMenu` 方法用于禁止页面的默认右键菜单。它会：

1. 阻止浏览器默认的右键菜单弹出
2. 使页面无法通过右键调出浏览器自带的上下文菜单
3. 通常用于实现自定义的右键菜单功能

## 示例

```javascript
// 禁用整个页面的默认右键菜单
cx.dom.banDefaultContextMenu();

// 在需要自定义右键菜单的场景中使用
const element = cx.dom.byId('customMenu');
cx.dom.banDefaultContextMenu();
element.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    // 显示自定义的右键菜单
    showCustomMenu(e);
});
``` 