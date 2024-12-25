# getAll

取栈中全部元素(不弹栈)。

## 语法

```javascript
getAll() → {Array.<Object>}
```

## 返回值

- Array.<Object> - 栈中所有元素的数组

## 描述

获取栈中所有元素,但不会将元素从栈中移除。

## 示例

```javascript
const stack = new cx.Stack();
stack.push({id: 1});
stack.push({id: 2});
stack.push({id: 3});

// 获取所有元素
const allItems = stack.getAll();
console.log('所有元素:', allItems);
// 输出: [{id: 3}, {id: 2}, {id: 1}]

// 栈内元素保持不变
console.log('栈大小:', stack.size()); // 输出: 3
```

## 注意事项

- 返回的数组顺序为从栈顶到栈底
- 此方法不会改变栈的内容 