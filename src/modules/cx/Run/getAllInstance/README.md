# getAllInstance

获取全部监管的已运行插件实例，重定向的运行路由插件不被监管。

## 语法

```javascript
static getAllInstance() → {Object}
```

## 返回值

- Object - 实例对象map序列，每个实例包含以下属性：
  - RunInstanceData.runInfo: RunInstanceData - 实例信息对象，包含以下属性：
    - runId: String - 运行实例id
    - runFinish: Boolean - 运行状态，runPlug完成并返回实例对象时为true
    - name: String - 插件标识名
    - uitype: Number - 插件ui类型
    - url: String - 插件文件路径
    - component: Object - 组件实例对象
    - container: String - 插件父容器插件名
  - RunInstanceData.uiWrap: Object - 插件中的ui容器组件对象，如dialog的管理组件
  - RunInstanceData.params: Object - 运行参数

## 示例

```javascript
// 获取所有运行实例
const instances = cx.run.getAllInstance();

// 遍历实例
for (const [runId, instance] of Object.entries(instances)) {
  console.log('实例信息:', instance.RunInstanceData.runInfo);
  console.log('UI容器:', instance.RunInstanceData.uiWrap);
  console.log('运行参数:', instance.RunInstanceData.params);
}
```

## 注意事项

- 直接通过 cx.run.getAllInstance 调用
- 返回的是所有被监管的运行实例
- 重定向的运行路由插件不会被包含在返回结果中