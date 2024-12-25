# procProgressByTask

根据任务查看流程进展

## 参数

- `task` (Object) - 任务信息
- `pluginName` (Object) - 插件名称

## 示例

```javascript
// 根据任务查看流程进展
cx.Bpm.procProgressByTask({
  id: "task123",
  name: "审批任务"
}, "myPlugin");