# activeAll 方法

激活全部监听。

## 语法

```javascript
cx.events.activeAll(obsTar)
```

## 参数

- `obsTar` (Object) - [可选] 观察目标对象

## 返回值

- (Object) - 返回 this 对象

## 描述

该方法用于激活所有监听器。如果提供了 obsTar 参数，则只激活与该观察目标相关的监听器。

## 示例

```javascript
// 激活所有监听器
cx.events.activeAll();

// 激活特定观察目标的所有监听器
const myComponent = {
    name: 'MyComponent'
};

cx.events.activeAll(myComponent);
```

## 注意事项

1. 如果不提供 obsTar，将激活系统中的所有监听器
2. 如果提供了 obsTar，只会激活与该观察目标相关的监听器
3. 激活后的监听器才能接收到事件通知
4. 此方法会影响所有已注册的监听器
5. 建议在需要批量激活监听器时使用此方法
6. 可以使用 unactive 方法选择性地取消某些监听器的激活状态 