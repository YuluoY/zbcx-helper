# 流程相关常量

## PROC_HANDLE
流程处理。

## PROC_PROGRESS
流程进度。

## PROC_START
流程启动。

## PROC_TRACE
流程追踪。

## 示例

```js
// 根据流程操作类型执行不同的处理
switch (operationType) {
  case cx.consts.PROC_START:
    // 启动流程
    startProcess();
    break;
  case cx.consts.PROC_HANDLE:
    // 处理流程
    handleProcess();
    break;
  case cx.consts.PROC_PROGRESS:
    // 查看流程进度
    showProgress();
    break;
  case cx.consts.PROC_TRACE:
    // 追踪流程
    traceProcess();
    break;
}

// 判断是否为流程启动操作
const isStartOperation = type === cx.consts.PROC_START;

// 判断是否为流程处理操作
const isHandleOperation = type === cx.consts.PROC_HANDLE;