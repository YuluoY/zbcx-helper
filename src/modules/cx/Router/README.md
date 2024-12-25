# Router

`cx.router` 路由管理类。所以添加的路由记录组件必须通过makeComponent函数处理。

## 静态方法

### addRoutes
给pRouteName父路由添加datas定义的子路由。

### addRoutesByPlug
根据plugin表数据添加整套路由记录，container为嵌套标识，值为root时是根路由。

### addToRouter
给router对象添加路由记录。

### hasRoute
判断name的路由是否存在，同$router.hasRoute。

### makeComponent
构造路由的组件对象，并注入getIdentity方法获取文件路径。

### makeComponentUrl
构造路由的组件url，统一处理成src/后的地址。

### makeDefNormalized
构造规范的原始定义数据。

### makeRouteRecord
根据数据构造路由记录，原始定义数据会存入路由的meta对象_srcDef属性中，构造的路由对象path使用相对路径提供地址更安全。

### makeRouteRecordRecursive
根据数据构造路由记录，并递归处理子路由。

### removeRoutes
移除路由。

## 使用示例

```javascript
// 添加路由
cx.router.addRoutes([{
  name: 'home',
  title: '首页',
  modDef: {
    url: 'src/ui/frame/Home.vue'
  }
}], 'parent');

// 检查路由是否存在
const exists = cx.router.hasRoute('home');

// 构造组件
const component = await cx.router.makeComponent({
  url: 'src/ui/frame/Home.vue'
});

// 构造路由记录
const route = cx.router.makeRouteRecord({
  name: 'home',
  title: '首页',
  modDef: {
    url: 'src/ui/frame/Home.vue'
  }
});
```

## 注意事项

- 所有方法都是静态的，直接通过 `cx.router` 访问
- 添加的路由记录组件必须通过makeComponent函数处理
- 路由路径使用相对路径以提供更安全的地址
- 支持嵌套路由的添加和管理 