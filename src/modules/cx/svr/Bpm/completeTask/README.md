# completeTask

完成任务

## 方法签名
```typescript
static completeTask(params: Object) => Promise
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| params | Object | 是 | 参数 |
| ├─ id | String | 是 | 任务ID |
| ├─ FILES_ | String | 否 | 附件列表 |
| ├─ FK_ | String | 否 | 变量(支持多个变量，变量名以 'FK_' 开头) |
| └─ COMMENT_ | String | 否 | 反馈意见 |

## 返回值
Promise 对象

## 功能描述
完成指定的任务，并可附加反馈意见和附件。

## 示例
```typescript
await cx.svr.bpm.completeTask({ id: 'task123', COMMENT_: 'Task completed successfully.' });
``` 