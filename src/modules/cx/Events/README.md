# Events 类

`Events` 类提供了一个事件管理系统，用于处理事件的订阅、发布、监听等操作。所有方法都是静态方法，可以直接通过类名调用。

## 方法列表

### 事件激活相关
- [active](active/README.md) - 激活事件
- [activeAll](activeAll/README.md) - 激活所有事件
- [unactive](unactive/README.md) - 取消激活事件
- [keepActive](keepActive/README.md) - 保持事件激活状态

### 事件监听相关
- [listen](listen/README.md) - 监听事件
- [unlisten](unlisten/README.md) - 取消监听事件

### 发布订阅相关
- [publish](publish/README.md) - 发布事件
- [subscribe](subscribe/README.md) - 订阅事件
- [unsubscribe](unsubscribe/README.md) - 取消订阅事件

### 其他
- [init](init/README.md) - 初始化事件系统
- [destroy](destroy/README.md) - 销毁事件系统

## 使用示例

```javascript
// 初始化
cx.events.init();

// 订阅事件
cx.events.subscribe('myEvent', (data) => {
    console.log('收到事件数据:', data);
});

// 发布事件
cx.events.publish('myEvent', { message: 'Hello World' });

// 监听事件
cx.events.listen('myEvent', (data) => {
    console.log('监听到事件:', data);
});

// 取消订阅
cx.events.unsubscribe('myEvent');

// 销毁事件系统
cx.events.destroy();
```

## 注意事项

1. 使用前需要先初始化事件系统
2. 事件名称应该具有唯一性和语义性
3. 在不需要时应该及时取消订阅，避免内存泄漏
4. 事件系统支持多个订阅者订阅同一个事件
5. 发布事件时可以传递任意类型的数据
6. 在应用程序关闭时应该调用 destroy 方法清理事件 