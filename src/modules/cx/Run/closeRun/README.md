# closeRun

关闭在运行的UI_DIALOG、UI_TABPAGE、UI_COM非路由类型插件，只有runInfo.component有值时才能关闭，路由插件只能通过切换路由销毁。

## 语法

```javascript
static closeRun(runInfo, success?)
```

## 参数

- runInfo: RunInfo | String - 插件运行信息对象 或 插件名
  - runId: String - 运行实例id
  - runFinish: Boolean - 运行状态，runPlug完成并返回实例对象时为true
  - name: String - 插件标识名
  - uitype: Number - 插件ui类型
  - url: String - 插件文件路径
  - component: Object|Null - 插件的组件对象，只有加载运行成功后才有值
  - container: String - 插件父容器插件名
- success?: function - 关闭成功回调函数

## 返回值

无

## 示例

```javascript
// 使用运行信息对象关闭
const runInfo = {
  runId: 'instance123',
  runFinish: true,
  name: 'myPlugin',
  uitype: 1,
  url: 'path/to/plugin',
  component: {}, // 组件对象
  container: 'parentPlugin'
};
cx.run.closeRun(runInfo, () => {
  console.log('插件关闭成功');
});

// 使用插件名关闭
cx.run.closeRun('myPlugin');
```

## 注意事项

- 直接通过 cx.run.closeRun 调用
- 只能关闭非路由类型的插件(UI_DIALOG、UI_TABPAGE、UI_COM)
- runInfo.component 必须有值才能关闭
- 路由类型插件只能通过切换路由来销毁
- 可以通过回调函数处理关闭成功后的逻辑