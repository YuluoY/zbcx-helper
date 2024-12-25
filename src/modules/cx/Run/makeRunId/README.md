# makeRunId

构造插件运行id，可作为key避免复用组件页面不刷新。

## 语法

```javascript
static makeRunId() → {String}
```

## 返回值

- String - 插件的运行标识

## 示例

```javascript
// 生成运行实例id
const runId = cx.run.makeRunId();
console.log('生成的运行ID:', runId);
```

## 注意事项

- 直接通过 cx.run.makeRunId 调用
- 用于生成唯一的运行实例标识
- 常用于避免复用组件页面不刷新的问题 