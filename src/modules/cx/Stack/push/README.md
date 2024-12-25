# push

压栈。

## 语法

```javascript
push(obj)
```

## 参数

- obj: Object - 待压栈的对象

## 描述

将一个元素压入栈顶。

## 示例

```javascript
const stack = new cx.Stack({
  maxSize: 2 // 限制栈大小为2
});

// 压入元素
stack.push({id: 1});
stack.push({id: 2});

// 如果超出maxSize限制,则无法继续压栈
stack.push({id: 3}); // 无效

console.log('栈大小:', stack.size()); // 输出: 2
```

## 注意事项

- 如果设置了 maxSize 且栈已满,则无法继续压入新元素
- 新元素将被添加到栈顶 