# delegateTask

委托任务

## 方法签名
```typescript
static delegateTask(params: Object) => Promise
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| params | Object | 是 | 参数 |
| ├─ id | String | 是 | 任务ID |
| └─ touser | String | 是 | 委托用户 |

## 返回值
Promise 对象

## 功能描述
将任务委托给其他用户。

## 示例
```typescript
await cx.svr.bpm.delegateTask({ id: 'task123', touser: 'user456' });
``` 