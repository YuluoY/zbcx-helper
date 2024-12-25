# makeRunInfo

构造插件运行信息，多文例插件的name会处理成唯一，并更新到def对象。路由类型插件全局使用已存在运行信息。

## 语法

```javascript
static makeRunInfo(def) → {RunInfo}
```

## 参数

- def: Object - 插件定义信息
  - name: String - 插件名
  - uitype: Number - 插件ui类型
  - runn: Number - 多实例类型
  - url: String - 插件地址
  - container: String - 插件父容器插件名

## 返回值

- RunInfo - 插件的运行信息对象，包含以下属性：
  - runId: String - 运行实例id
  - runFinish: Boolean - 运行状态，runPlug完成并返回实例对象时为true
  - name: String - 插件标识名
  - uitype: Number - 插件ui类型
  - url: String - 插件文件路径
  - component: Object|Null - 插件的组件对象，只有加载运行成功后才有值
  - container: String - 插件父容器插件名

## 示例

```javascript
// 构造插件运行信息
const def = {
  name: 'myPlugin',
  uitype: 1,
  runn: 0,
  url: '/plugins/myPlugin',
  container: 'mainContainer'
};
const runInfo = cx.run.makeRunInfo(def);
console.log('插件运行信息:', runInfo);
```

## 注意事项

- 直接通过 cx.run.makeRunInfo 调用
- 多实例插件的name会被处理成唯一标识
- 路由类型插件会使用全局已存在的运行信息
- 会更新传入的def对象 