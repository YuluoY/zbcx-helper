# publish 方法

发布消息。

## 语法

```javascript
cx.events.publish(dataType, params, obsTar)
```

## 参数

- `dataType` (String | Number) - 数据类型，用于标识事件类型
- `params` (*) - 调用回调函数的信息，即要传递给订阅者的数据
- `obsTar` (Object) - [可选] 观察目标对象（广播该消息的对象）

## 返回值

- (Object) - 返回 this 对象

## 描述

该方法用于发布指定类型的事件，所有订阅了该类型事件的回调函数都会被触发，并接收到传递的参数。

## 示例

```javascript
// 简单发布
cx.events.publish('userLogin', { userId: 123, username: 'admin' });

// 带观察目标的发布
const myComponent = {
    name: 'MyComponent'
};

cx.events.publish('dataChange', { 
    value: 'newValue',
    timestamp: Date.now()
}, myComponent);

// 发布数字类型的事件
cx.events.publish(1001, { 
    action: 'update',
    data: { /* ... */ }
});
```

## 注意事项

1. 发布事件时，所有订阅该事件的回调函数都会被触发
2. params 参数可以是任意类型的数据
3. 如果指定了 obsTar，只���使用相同 obsTar 订阅的监听器会收到消息
4. 事件发布是同步的，回调函数会立即执行
5. 如果没有任何订阅者，发布事件不会产生任何效果
6. 确保在发布事件前已经初始化了事件系统 