# unsubscribe 方法

取消订阅事件。

## 语法

```javascript
cx.events.unsubscribe(id, obsTar, dataType, caller)
```

## 参数

- `id` (*) - id标识，用于标识要取消的订阅
- `obsTar` (Object) - [可选] 观察目标对象
- `dataType` (String | Number) - 数据类型
- `caller` (Function) - 回调函数

## 返回值

- (Object) - 返回 this 对象

## 描述

该方法用于取消之前订阅的事件。需要提供与订阅时相同的参数来取消特定的订阅。没有 obsTar 时，删除所有注册 id 的记录；否则删除注册 id 记录中，订阅目标是 obsTar 对象的记录。

## 示例

```javascript
// 定义回调函数
const handleUserLogin = (data) => {
    console.log('用户登录:', data);
};

// 订阅事件
cx.events.subscribe('loginSub', 'userLogin', handleUserLogin);

// 取消订阅
cx.events.unsubscribe('loginSub', null, 'userLogin', handleUserLogin);

// 带观察目标的取消订阅
const myComponent = {
    name: 'MyComponent'
};

const handleDataChange = (data) => {
    console.log('数据变化:', data);
};

// 订阅事件
cx.events.subscribe('dataSub', 'dataChange', handleDataChange, myComponent);

// 取消订阅
cx.events.unsubscribe('dataSub', myComponent, 'dataChange', handleDataChange);
```

## 注意事项

1. 取消订阅时需要提供与订阅时完全相同的参数
2. 如果提供的参数与订阅时不匹配，取消订阅可能不会生效
3. 建议在组件销毁前取消所有相关的订阅
4. 如果有多个相同事件类型的订阅，只会取消匹配的那一个
5. 取消订阅后，该回调函数将不再接收事件通知
6. 如果只提供 id 参数，会删除该 id 下的所有订阅记录
  </rewritten_file> 