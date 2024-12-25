# active 方法

激活监听。

## 语法

```javascript
cx.events.active(id, dataTypes, obsTar)
```

## 参数

- `id` (*) - id标识
- `dataTypes` (Array) - 数据类型列表（指定了类型则限定指定的类型，否则该对象的全部监听保持一直激活）
- `obsTar` (Object) - [可选] 观察目标对象

## 返回值

- (Object) - 返回 this 对象

## 描述

该方法用于激活指定 id 的监听器。可以指定特定的数据类型列表，如果不指定则激活该 id 下的所有监听器。

## 示例

```javascript
// 激活特定类型的监听
cx.events.active('myListener', ['userLogin', 'userLogout']);

// 激活所有类型的监听
cx.events.active('myListener');

// 带观察目标的激活
const myComponent = {
    name: 'MyComponent'
};

cx.events.active('dataListener', ['dataChange', 'dataUpdate'], myComponent);
```

## 注意事项

1. 如果不提供 dataTypes，将激活该 id 下的所有监听器
2. 可以同时激活多个数据类型的监听器
3. 如果提供了 obsTar，只会激活与该观察目标相关的监听器
4. 激活后的监听器才能接收到事���通知
5. 可以使用 unactive 方法取消激活状态
6. 建议在需要临时禁用某些事件监听时使用此方法 