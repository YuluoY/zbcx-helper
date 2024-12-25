# keepActive 方法

保持监听激活。

## 语法

```javascript
cx.events.keepActive(id, dataTypes, obsTar)
```

## 参数

- `id` (*) - id标识
- `dataTypes` (Array) - 数据类型列表（指定了类型则限定指定的类型，否则该对象的全部监听保持一直激活）
- `obsTar` (Object) - [可选] 观察目标对象

## 返回值

- (Object) - 返回 this 对象

## 描述

该方法用于保持指定 id 的监听器处于激活状态。与 active 方法不同，keepActive 会确保监听器始终保持激活状态，即使在其他地方尝试取消激活也不会生效。

## 示例

```javascript
// 保持特定类型的监听始终激活
cx.events.keepActive('myListener', ['userLogin', 'userLogout']);

// 保持所有类型的监听始终激活
cx.events.keepActive('myListener');

// 带观察目标的保持激活
const myComponent = {
    name: 'MyComponent'
};

cx.events.keepActive('dataListener', ['dataChange', 'dataUpdate'], myComponent);
```

## 注意事项

1. 如果不提供 dataTypes，将保持该 id 下的所有监听器激活
2. 可以同时保持多个数据类型的监听器���活
3. 如果提供了 obsTar，只会影响与该观察目标相关的监听器
4. 使用此方法后，unactive 方法将不能取消这些监听器的激活状态
5. 建议谨慎使用此方法，因为它会覆盖正常的激活/取消激活机制
6. 只有在确实需要监听器始终保持激活状态时才使用此方法 