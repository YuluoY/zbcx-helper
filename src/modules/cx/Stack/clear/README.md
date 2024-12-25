# clear

清空栈。

## 语法

```javascript
clear()
```

## 描述

清空栈中的所有元素。

## 示例

```javascript
const stack = new cx.Stack();
stack.push({id: 1});
stack.push({id: 2});

// 清空栈
stack.clear();
console.log('栈大小:', stack.size()); // 输出: 0
```

## 注意事项

- 调用此方法后栈将被清空,但对象仍然可用
- 与 destroy() 不同,clear() 不会销毁对象本身 