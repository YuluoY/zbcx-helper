# unclaimTask

删除部署

## 方法签名
```typescript
static unclaimTask(params: Object) => Promise
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| params | Object | 否 | 参数 |
| └─ id | String | 否 | 任务ID |

## 返回值
Promise 对象，表示任务取消认领的结果。

## 功能描述
取消认领指定的任务。

## 示例
```typescript
await cx.svr.bpm.unclaimTask({ id: 'task123' });
``` 