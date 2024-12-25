# Stack

`cx.Stack` 类 - 栈数据结构的实现。

## 构造函数

```javascript
new Stack(options)
```

### 参数
- options: Object - 配置选项
  - maxSize: Boolean - 栈大小, 加入<1, 则不限制栈大小, 默认值: 0

## 实例方法

- **clear()**: 清空栈
- **destroy()**: 销毁对象
- **getAll()** → {Array.<Object>}: 取栈中全部元素(不弹栈)
- **getTop()** → {Object}: 取栈顶元素(不弹栈)
- **pop()** → {Object}: 弹栈,将栈顶元素弹出
- **push(obj)**: 压栈
  - obj: Object - 待压栈的对象
- **size()** → {Number}: 取栈中元素个数

## 使用示例

```javascript
// 创建栈实例
const stack = new cx.Stack({
  maxSize: 5 // 限制栈大小为5
});

// 压入元素
stack.push({id: 1, name: 'item1'});
stack.push({id: 2, name: 'item2'});

// 获取栈顶元素
const top = stack.getTop();
console.log('栈顶元素:', top);

// 弹出元素
const item = stack.pop();
console.log('弹出元素:', item);

// 获取栈大小
const size = stack.size();
console.log('栈大小:', size);

// 获取所有元素
const all = stack.getAll();
console.log('所有元素:', all);

// 清空栈
stack.clear();

// 销毁栈
stack.destroy();
```

## 注意事项

- 需要通过 `new cx.Stack()` 创建实例后使用
- 可以通过 maxSize 参数限制栈的大小
- destroy() 方法调用后对象将被销毁,不能继续使用 