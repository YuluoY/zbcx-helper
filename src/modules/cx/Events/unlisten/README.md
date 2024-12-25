# unlisten 方法

取消监听消息。

## 语法

```javascript
cx.events.unlisten(id, obsTar, dataType)
```

## 参数

- `id` (*) - id标识，用于标识要取消的监听器
- `obsTar` (Object) - [可选] 观察目标对象
- `dataType` (String) - 数据类型

## 返回值

- (Object) - 返回 this 对象

## 描述

该方法用于取消之前通过 listen 方法设置的事件监听。没有 obsTar 时，删除所有注册 id 的记录；否则删除注册 id 记录中，订阅目标是 obsTar 对象的记录。

## 示例

```javascript
// 简单取消监听
cx.events.listen('myListener', 'userLogin', (data) => {
    console.log('用户登录:', data);
});
cx.events.unlisten('myListener', null, 'userLogin');

// 带观察目标的取消监听
const myComponent = {
    name: 'MyComponent'
};

cx.events.listen('dataListener', 'dataChange', (data) => {
    console.log('数据变化:', data);
}, myComponent);

cx.events.unlisten('dataListener', myComponent, 'dataChange');
```

## 注意事项

1. 取消监听时需要提供正确的 id 和事件类型
2. 如果提供了 obsTar，只会取消与该观察目标相关的监听
3. 建议在组件销毁前取消所有相关的监听
4. 如果只提供 id 参数，会删除该 id 下的所有监听记录
5. 取消监听后，该监听器将不再接收事件通知
6. 与 unsubscribe 相比，unlisten 不需要提供 caller 参数 