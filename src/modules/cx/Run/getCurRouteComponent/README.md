# getCurRouteComponent

获取当前$route的组件对象。

## 语法

```javascript
static getCurRouteComponent() → {Object}
```

## 返回值

- Object - 路由的组件对象

## 示例

```javascript
// 获取当前路由组件
const component = cx.run.getCurRouteComponent();
console.log('当前路由组件:', component);
```

## 注意事项

- 直接通过 cx.run.getCurRouteComponent 调用
- 返回当前激活路由的组件对象