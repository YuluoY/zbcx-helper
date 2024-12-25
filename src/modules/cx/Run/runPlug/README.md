# runPlug

根据插件的运行属性，对于插件的width、height、modal属性优先级：params > overDef > def 对话框的uicfg配置取最后口RunVueJoad2Dlg。

## 语法

```javascript
static runPlug(plug, runParams?, overDef?) → {Promise}
```

## 参数

- plug: Object|String - 插件定义对象 或 插件名
  - name: String - 插件名
  - uitype: Number - 插件ui类型
  - runn: Number - 多实例类型
  - url: String - 插件地址
  - container: String - 插件父容器插件名，对话框的父容器节点需要设置 ref="rootEle"，用于获取容器尺寸计算中心位置
- runParams?: Object - 插件运行参数
- overDef?: Object - 覆盖插件定义的参数，如uitype、uicfg等

## 返回值

- Promise - 运行的promise对象，返回 RunInfo 实例

## 示例

```javascript
// 运行插件
const plug = {
  name: 'myPlugin',
  uitype: 1,
  runn: 0,
  url: '/plugins/myPlugin',
  container: 'mainContainer'
};

const runParams = {
  width: 800,
  height: 600
};

const overDef = {
  uitype: 2
};

cx.run.runPlug(plug, runParams, overDef)
  .then(runInfo => {
    console.log('插件运行成功:', runInfo);
  })
  .catch(err => {
    console.error('插件运行失败:', err);
  });

cx.run.runPlug(
  'myPlugin', 
  { width: 800, height: 600 }, 
  { 
    uitype: 2, 
    uicfg: { width: 800, height: 600 } 
  }
)

cx.run.runPlug(
  'myPlugin', 
  { width: 800, height: 600 }, 
  { 
    uitype: 2, 
    uicfg: { width: 0.8, height: 0.6 } 
  }
)
```

## 注意事项

- 直接通过 cx.run.runPlug 调用
- 参数优先级：params > overDef > def
- 对话框类型插件需要设置父容器ref="rootEle"
- 返回Promise对象，可以处理运行成功和失败的回调 