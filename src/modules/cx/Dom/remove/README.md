# remove

删除DOM节点。

## 语法

```javascript
(static) cx.dom.remove(dom) → {void}
```

## 参数

- `dom` (DOM): 要删除的DOM节点。

## 返回值

- `void`: 无返回值。

## 描述

`remove`方法用于从文档中删除指定的DOM节点。这个方法会：

1. 将目标节点从其父节点中移除
2. 清除该节点的所有内容和事件监听器
3. 完全从DOM树中删除该节点

这个方法常用于：
- 动态删除不需要的页面元素
- 清理不再使用的DOM节点
- 在更新UI时移除旧的元素

## 示例

```javascript
// 删除单个元素
const element = cx.dom.byId('elementToRemove');
cx.dom.remove(element);

// 删除多个元素
const elements = document.querySelectorAll('.temporary');
elements.forEach(element => {
    cx.dom.remove(element);
});

// 在条件满足时删除元素
const notification = cx.dom.byId('notification');
if (notification) {
    setTimeout(() => {
        cx.dom.remove(notification);
    }, 3000);
}
```

## 注意事项

- 删除操作是不可逆的，请确保在删除节点前已保存任何需要的信息
- 删除节点会同时删除其所有子节点
- 建议在删除节点前先解绑所有事件监听器，以防止内存泄漏