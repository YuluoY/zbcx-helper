# subscribe 方法

订阅事件。

## 语法

```javascript
cx.events.subscribe(id, dataType, caller, obsTar)
```

## 参数

- `id` (*) - id标识，用于唯一标识订阅
- `dataType` (String | Number) - 数据类型，用于标识事件类型
- `caller` (Function) - 回调函数，当事件触发时执行
- `obsTar` (Object) - [可选] 观察目标对象，用于指定回调函数的执行上下文

## 返回值

- (Object) - 返回 this 对象

## 描述

该方法用于订阅指定类型的事件。当事件被发布时，订阅的回调函数会被触发。

## 示例

```javascript
// 简单订阅
cx.events.subscribe('mySubscription', 'userLogin', (data) => {
    console.log('用户登录:', data);
});

// 带观察目标的订阅
const myComponent = {
    name: 'MyComponent'
};

cx.events.subscribe('dataChangeSubscription', 'dataChange', (data) => {
    console.log('数据变化:', data);
}, myComponent);
```

## 注意事项

1. id 参数用于唯一标识订阅，便于后续取消订阅
2. 同一个事件可以有多个订阅者
3. 回调函数会在事件发布时被调用
4. 建议在组件销毁时取消订阅，避免内存泄漏
5. 观察目标对象可以用于在特定上下文中执行回调
6. 订阅前确保事件系统已经初始化