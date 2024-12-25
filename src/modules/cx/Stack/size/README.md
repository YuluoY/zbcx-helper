# size

取栈中元素个数。

## 语法

```javascript
size() → {Number}
```

## 返回值

- Number - 栈中元素的数量

## 描述

获取当前栈中元素的数量。

## 示例

```javascript
const stack = new cx.Stack();
console.log('初始大小:', stack.size()); // 输出: 0

stack.push({id: 1});
stack.push({id: 2});
console.log('压入后大小:', stack.size()); // 输出: 2

stack.pop();
console.log('弹出后大小:', stack.size()); // 输出: 1
```

## 注意事项

- 返回值总是大于等于0
- 如果栈为空,返回0 