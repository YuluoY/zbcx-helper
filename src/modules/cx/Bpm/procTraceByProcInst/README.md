# procTraceByProcInst

根据流程实例查看流程跟踪图

## 参数

- `procInst` (Object) - 流程实例
- `pluginName` (Object) - 插件名称

## 示例

```javascript
// 查看流程跟踪图
cx.Bpm.procTraceByProcInst({
  id: "instance123",
  name: "流程实例1"
}, "myPlugin");