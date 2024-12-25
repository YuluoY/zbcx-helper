# pop

弹栈,将栈顶元素弹出。

## 语法

```javascript
pop() → {Object}
```

## 返回值

- Object - 弹出的栈顶元素

## 描述

将栈顶元素弹出并返回。

## 示例

```javascript
const stack = new cx.Stack();
stack.push({id: 1});
stack.push({id: 2});

// 弹出栈顶元素
const item = stack.pop();
console.log('弹出元素:', item);
// 输出: {id: 2}

// 栈大小减少
console.log('栈大小:', stack.size()); // 输出: 1
```

## 注意事项

- 此方法会移除并返回栈顶元素
- 如果栈为空,返回 undefined