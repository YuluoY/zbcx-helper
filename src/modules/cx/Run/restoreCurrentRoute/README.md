# restoreCurrentRoute

还原保存的当前路由，用于刷新后还原页面。

## 语法

```javascript
static restoreCurrentRoute(跳转的目标路由记录) → {void}
```

## 参数

- 跳转的目标路由记录: RouteRecord - 路由记录对象

## 返回值

无

## 示例

```javascript
// 还原当前路由
const routeRecord = {
  // 路由记录对象
};
cx.run.restoreCurrentRoute(routeRecord);
```

## 注意事项

- 直接通过 cx.run.restoreCurrentRoute 调用
- 用于页面刷新后还原之前的路由状态
- 需要先使用saveCurrentRoute保存路由 