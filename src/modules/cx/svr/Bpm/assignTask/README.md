# assignTask

指派任务

## 方法签名
```typescript
static assignTask(params: Object) => Promise
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| params | Object | 是 | 参数 |
| └─ id | String | 是 | 任务ID |

## 返回值
Promise 对象

## 功能描述
将任务指派给特定用户。

## 示例
```typescript
await cx.svr.bpm.assignTask({ id: 'task123' });
``` 