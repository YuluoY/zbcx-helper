# getTop

取栈顶元素(不弹栈)。

## 语法

```javascript
getTop() → {Object}
```

## 返回值

- Object - 栈顶元素

## 描述

获取栈顶元素,但不会将元素从栈中移除。

## 示例

```javascript
const stack = new cx.Stack();
stack.push({id: 1});
stack.push({id: 2});

// 获取栈顶元素
const topItem = stack.getTop();
console.log('栈顶元素:', topItem);
// 输出: {id: 2}

// 栈内元素保持不变
console.log('栈大小:', stack.size()); // 输出: 2
```

## 注意事项

- 此方法不会改变栈的内容
- 如果栈为空,返回 undefined