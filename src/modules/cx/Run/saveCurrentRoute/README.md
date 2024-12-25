# saveCurrentRoute

保存当前路由，用于刷新后还原页面。

## 语法

```javascript
static saveCurrentRoute() → {void}
```

## 返回值

无

## 示例

```javascript
// 保存当前路由
cx.run.saveCurrentRoute();
```

## 注意事项

- 直接通过 cx.run.saveCurrentRoute 调用
- 用于保存当前路由状态，以便后续还原
- 配合restoreCurrentRoute使用 