# returnTask

回退任务

## 方法签名
```typescript
static returnTask(params: Object) => Promise
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| params | Object | 否 | 参数 |
| ├─ id | String | 否 | 任务ID |
| ├─ backto | String | 否 | 退回任务ID |
| └─ COMMENT_ | String | 否 | 反馈意见 |

## 返回值
Promise 对象，表示任务回退的结果。

## 功能描述
将指定任务回退到之前的状态。

## 示例
```typescript
await cx.svr.bpm.returnTask({ id: 'task123', backto: 'task456', COMMENT_: '需要修改' });
``` 