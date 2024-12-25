# getRunInstance

获取已运行插件实例。

## 语法

```javascript
static getRunInstance(name) → {RunInstance|Null}
```

## 参数

- name: String - 插件名

## 返回值

- RunInstance|Null - 实例对象，包含以下属性：
  - remove: function - 删除该实例
  - isReady: function - 实例是否正在运行
  - getParams: function - 获取插件的运行参数
  - getComponent: function - 获取运行实例的组件对象
  - setComponent: function - 设置运行实例的组件对象
  - getWrapDialogs: function - 获取插件的对话框容器组件
  - setWrapDialogs: function - 设置插件的对话框容器组件，参数(component)
  - getWrapDynaComs: function - 获取插件的容器组件，参数(name = 'default')
  - setWrapDynaComs: function - 设置插件的容器组件，参数(component, name = 'default')
  - getWrapSinglePages: function - 获取插件的单页面容器组件
  - setWrapSinglePages: function - 设置插件的单页面容器组件，参数(component)
  - data: RunInstance|Null - 运行实例数据对象，包含：
    - runInfo: RunInfo - 实例信息对象，包含：
      - runId: String - 运行实例id
      - runFinish: Boolean - 运行状态，runPlug完成并返回实例对象时为true
      - name: String - 插件标识名
      - uitype: Number - 插件ui类型
      - url: String - 插件文件路径
      - component: Object - 插件实例对象
      - container: String - 插件父容器插件名
    - uiWrap: Object - 插件中的ui容器组件对象，如dialog、dynaCom、sinPage的管理组件
    - params: Object - 运行参数

## 示例

```javascript
// 获取运行实例
const instance = cx.run.getRunInstance('myPlugin');
if (instance) {
  console.log('实例数据:', instance.data);
  console.log('是否运行:', instance.isReady());
  console.log('运行参数:', instance.getParams());
}
```

## 注意事项

- 直接通过 cx.run.getRunInstance 调用
- 只能获取已经运行的插件实例
- 返回的实例对象包含完整的实例管理方法