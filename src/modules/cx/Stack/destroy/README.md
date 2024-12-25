# destroy

销毁对象。

## 语法

```javascript
destroy()
```

## 描述

销毁栈对象,释放内存资源。调用此方法后对象将不能继续使用。

## 示例

```javascript
const stack = new cx.Stack();
stack.push({id: 1});

// 销毁栈对象
stack.destroy();

// 之后不能继续使用此对象
// stack.push({id: 2}); // 错误:对象已销毁
```

## 注意事项

- 调用此方法后对象将被完全销毁,不能继续使用
- 如果只需要清空栈内容,应使用 clear() 方法 