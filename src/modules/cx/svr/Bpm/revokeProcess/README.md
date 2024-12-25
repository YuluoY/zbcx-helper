# revokeProcess

撤销流程

## 方法签名
```typescript
static revokeProcess(params: Object) => Promise
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| params | Object | 否 | 参数 |
| └─ id | String | 否 | 流程实例ID |

## 返回值
Promise 对象，表示流程撤销的结果。

## 功能描述
撤销指定的流程实例。

## 示例
```typescript
await cx.svr.bpm.revokeProcess({ id: 'instance123' });
``` 