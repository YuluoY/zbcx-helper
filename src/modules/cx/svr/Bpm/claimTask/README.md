# claimTask

认领任务

## 方法签名
```typescript
static claimTask(params: Object) => Promise
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| params | Object | 是 | 参数 |
| ├─ id | String | 是 | 任务ID |
| └─ userid | String | 否 | 用户ID |

## 返回值
Promise 对象

## 功能描述
认领指定的任务。

## 示例
```typescript
await cx.svr.bpm.claimTask({ id: 'task123', userid: 'user456' });
``` 