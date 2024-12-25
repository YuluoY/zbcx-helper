# isMultRunMode

检查插件是否处于多实例运行模式。

## 语法

```javascript
static isMultRunMode(runInfo) → {Boolean}
```

## 参数

- runInfo: Object - 实例信息对象，包含以下属性：
  - runId: String - 运行实例id
  - runFinish: Boolean - 运行状态，runPlug完成并返回实例对象时为true
  - name: String - 插件标识名
  - uitype: Number - 插件ui类型
  - url: String - 插件文件路径
  - component: Object|Null - 插件的组件对象，只有加载运行成功后才有值
  - container: String - 插件父容器插件名

## 返回值

- Boolean - 是否处于多实例运行模式
  - true - 处于多实例运行模式
  - false - 不处于多实例运行模式

## 示例

```javascript
// 检查插件是否处于多实例运行模式
const runInfo = {
  runId: 'example-run-id',
  runFinish: true,
  name: 'myPlugin',
  uitype: 1,
  url: '/plugins/myPlugin.js',
  component: null,
  container: 'mainContainer'
};

const isMultMode = cx.run.isMultRunMode(runInfo);
console.log('是否处于多实例运行模式:', isMultMode);
```

## 注意事项

- 直接通过 cx.run.isMultRunMode 调用
- 用于检查插件当前是否处于多实例运行模式
- 返回值为布尔类型，表示是否处于多实例运行模式
- 此方法与canMultRun的区别是：canMultRun检查插件是否支持多实例运行，而isMultRunMode检查插件当前是否处于多实例运行模式
``` 