# setVariables

设置流程变量

## 方法签名
```typescript
static setVariables(params: Object) => Promise
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| params | Object | 否 | 参数 |
| ├─ id | String | 否 | 任务ID |
| └─ variables | String | 否 | 变量(多个变量之间用,分隔)(每个变量及其值采用键值对方式放在params里面) |

## 返回值
Promise 对象，表示变量设置的结果。

## 功能描述
设置指定任务的流程变量。

## 示例
```typescript
await cx.svr.bpm.setVariables({ id: 'task123', variables: 'var1=value1,var2=value2' });
``` 