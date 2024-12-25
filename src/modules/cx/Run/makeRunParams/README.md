# makeRunParams

构造插件运行参数，附加运行实例 runId，方便路由由插件获取。作为组件key，避免复用组件页面不刷新。

## 语法

```javascript
static makeRunParams(params, runInfo) → {RunParams}
```

## 参数

- params: Object|Null - 插件的运行参数对象
- runInfo: Object|Null - 插件的运行信息对象，用于获取runId

## 返回值

- RunParams - 处理后的运行参数对象，params非空时返回params自己，空时范围新对象

## 示例

```javascript
// 构造运行参数
const params = {
  key1: 'value1',
  key2: 'value2'
};
const runInfo = {
  runId: 'instance123',
  name: 'myPlugin'
};
const runParams = cx.run.makeRunParams(params, runInfo);
console.log('运行参数:', runParams);
```

## 注意事项

- 直接通过 cx.run.makeRunParams 调用
- 会将runId添加到运行参数中
- 常用于路由插件获取运行实例
- 可作为组件key避免复用组件页面不刷新 