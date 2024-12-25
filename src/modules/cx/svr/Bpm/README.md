# bpm

流程管理服务类

## 类名
cx.svr.bpm

## 功能说明
提供对流程管理的操作服务，包括流程部署、任务管理、流程查询等功能。

## 方法列表
| 方法名 | 说明 | 文档链接 |
|--------|------|----------|
| addDeployment | 添加流程部署 | [查看详情](./addDeployment/README.md) |
| assignTask | 分配任务 | [查看详情](./assignTask/README.md) |
| claimTask | 认领任务 | [查看详情](./claimTask/README.md) |
| completeTask | 完成任务 | [查看详情](./completeTask/README.md) |
| delDeployment | 删除流程部署 | [查看详情](./delDeployment/README.md) |
| delegateTask | 委派任务 | [查看详情](./delegateTask/README.md) |
| getAllDeploy | 获取所有部署 | [查看详情](./getAllDeploy/README.md) |
| getAllProcDef | 获取所有流程定义 | [查看详情](./getAllProcDef/README.md) |
| getBillM | 获取单据号 | [查看详情](./getBillM/README.md) |
| getProcDef | 获取流程定义 | [查看详情](./getProcDef/README.md) |
| getProcDefByDeploy | 根据部署ID获取流程定义 | [查看详情](./getProcDefByDeploy/README.md) |
| getProcDefDgm | 获取取流程图 | [查看详情](./getProcDefDgm/README.md) |
| getProcDefDgmSvg | 获取流程SVG图 | [查看详情](./getProcDefDgmSvg/README.md) |
| getTimeM | 获取当前时间 | [查看详情](./getTimeM/README.md) |
| getVariables | 获取流程变量 | [查看详情](./getVariables/README.md) |
| queryHisComment | 查询历史反馈 | [查看详情](./queryHisComment/README.md) |
| queryHisProc | 查询历史流程 | [查看详情](./queryHisProc/README.md) |
| queryMyStarted | 查询我发起的流程 | [查看详情](./queryMyStarted/README.md) |
| queryMyTask | 查询我的任务 | [查看详情](./queryMyTask/README.md) |
| queryProcDgm | 查询流程跟踪图 | [查看详情](./queryProcDgm/README.md) |
| queryProcInst | 查询流程实例 | [查看详情](./queryProcInst/README.md) |
| queryProcProg | 查询流程进度 | [查看详情](./queryProcProg/README.md) |
| queryUserTask | 查询用户任务 | [查看详情](./queryUserTask/README.md) |
| returnTask | 回退任务 | [查看详情](./returnTask/README.md) |
| revokeProcess | 撤销流程 | [查看详情](./revokeProcess/README.md) |
| setVariables | 设置流程变量 | [查看详情](./setVariables/README.md) |
| startProcess | 启动流程 | [查看详情](./startProcess/README.md) |
| unclaimTask | 取消认领任务 | [查看详情](./unclaimTask/README.md) |
| unfinished | 查询未完成流程 | [查看详情](./unfinished/README.md) |
| url | 获取服务网址 | [查看详情](./url/README.md) |
| urlGet | 获取GET服务网址 | [查看详情](./urlGet/README.md) |

## 使用示例
```typescript
// 添加流程部署
await cx.svr.bpm.addDeployment({ filename: 'process.bpmn', name: 'New Process' });

// 分配任务
await cx.svr.bpm.assignTask({ id: 'taskId' });

// 获取服务网址
const serviceUrl = cx.svr.bpm.url();
``` 