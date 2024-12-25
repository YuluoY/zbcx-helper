# Run

`cx.run` 类 - 运行插件。提供了一系列用于管理插件运行的静态方法。

## 静态方法

### canMultRun
判断是否可多实例运行，只有叶子插件可以多实例运行。

### closeRun
关闭在运行的UI_DIALOG、UI_TABPAGE、UI_COM非路由类型插件，只有runInfo.component有值时才能关闭，路由插件只能通过切换路由销毁。

### getAllInstance
获取全部监管的已运行插件实例，重定向的运行路由插件不被监管。

### getCacheCurrentRoute
获取保存当前路由序列。

### getCurRouteComponent
获取当前$route的组件对象。

### getRouteByRedirectedFrom
用路由$route对象redirectedFrom属性向父路由遍历，查找name路由对象。

### getRouteRunParams
获取路由的运行参数，依次从路由、插件实例、插件定义中获取。

### getRunInstance
获取已运行插件实例。

### isMultRunMode
是否多实例运行模式。

### isRunParamsSame
判断运行参数是否相同。

### makeRunId
生成运行实例id。

### makeRunInfo
生成运行信息对象。

### makeRunParams
生成运行参数。

### restoreCurrentRoute
恢复当前路由。

### runPlug
运行插件。

### saveCurrentRoute
保存当前路由。

### usePlugLib
使用插件库。

## 使用示例

```javascript
// 运行插件
cx.run.runPlug({
  name: 'myPlugin',
  params: {
    // 运行参数
  }
});

// 关闭运行实例
cx.run.closeRun({
  runId: 'instance123'
});

// 获取运行实例
const instance = cx.run.getRunInstance('myPlugin');
```

## 注意事项

- 所有方法都是静态方法，通过 `cx.run` 直接调用
- 插件运行实例的生命周期管理
- 支持多实例运行模式
- 提供完整的路由管理功能 