# getCacheCurrentRoute

获取保存当前路由序列。

## 语法

```javascript
static getCacheCurrentRoute() → {Array.<RouteOpt>}
```

## 返回值

- Array.<RouteOpt> - 路由配置对象序列

## 示例

```javascript
// 获取当前路由序列
const routes = cx.run.getCacheCurrentRoute();
console.log('当前路由配置:', routes);
```

## 注意事项

- 直接通过 cx.run.getCacheCurrentRoute 调用
- 返回当前已保存的路由配置序列