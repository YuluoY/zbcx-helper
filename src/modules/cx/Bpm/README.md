# Bpm

流程管理相关的功能类

## 方法列表

### 流程启动
- [startByProc](startByProc/README.md) - 根据proc(表proc)启动流程
- [startWithTmpl](startWithTmpl/README.md) - 使用模板启动流程

### 流程查询
- [getProcKey](getProcKey/README.md) - 根据流程ID取流程的Key
- [getProcsAll](getProcsAll/README.md) - 取所有的流程信息

### 流程进展
- [procProgressByProcInst](procProgressByProcInst/README.md) - 根据流程实例查看流程进展
- [procProgressByTask](procProgressByTask/README.md) - 根据任务查看流程进展

### 流程跟踪
- [procTraceByProcInst](procTraceByProcInst/README.md) - 根据流程实例查看流程跟踪图
- [procTraceByTask](procTraceByTask/README.md) - 根据任务查看流程跟踪图

### 任务处理
- [assignTo](assignTo/README.md) - 指派给某人
- [commentApply](commentApply/README.md) - 提交任务反馈意见

## 示例

```javascript
// 启动流程
cx.Bpm.startByProc({
  id: "proc123",
  name: "采购审批流程"
}, {
  amount: 1000,
  department: "IT"
}).then(result => {
  console.log("Process started:", result);
});

// 查看流程进展
cx.Bpm.procProgressByProcInst({
  id: "instance123",
  name: "流程实例1"
}, "myPlugin");

// 提交任务反馈
cx.Bpm.commentApply({
  id: "task123",
  backto: "task100",
  COMMENT_: "需要修改,请重新处理"
});
``` 