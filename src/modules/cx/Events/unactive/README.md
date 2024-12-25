# unactive 方法

取消激活监听。

## 语法

```javascript
cx.events.unactive(id, dataTypes, obsTar)
```

## 参数

- `id` (*) - id标识
- `dataTypes` (Array) - 数据类型列表（指定了类型则限定指定的类型，否则该对象的全部监听取消激活）
- `obsTar` (Object) - [可选] 观察目标对象

## 返回值

- (Object) - 返回 this 对象

## 描述

该方法用于取消激活指定 id 的监听器。可以指定特定的数据类型列表，如果不指定则取消激活该 id 下的所有监听器。

## 示例

```javascript
// 取消激活特定类型的监听
cx.events.unactive('myListener', ['userLogin', 'userLogout']);

// 取消激活所有类型的监听
cx.events.unactive('myListener');

// 带观察目标的取消激活
const myComponent = {
    name: 'MyComponent'
};

cx.events.unactive('dataListener', ['dataChange', 'dataUpdate'], myComponent);
```

## 注意事项

1. 如果不提供 dataTypes，将取消激活该 id 下的所有监听器
2. 可以同时取消激活多个数据类型的监听器
3. 如果提供了 obsTar，只会取消激活与该观察目标相��的监听器
4. 取消激活后的监听器将不再接收事件通知
5. 可以使用 active 方法重新激活监听器
6. 取消激活不会删除监听器，只是暂时禁用它 