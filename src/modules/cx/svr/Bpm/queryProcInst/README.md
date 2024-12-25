# queryProcInst

查询流程实例信息

## 方法签名
```typescript
static queryProcInst(params: Object) => Promise
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| params | Object | 否 | 参数 |
| └─ id | String | 否 | 流程实例ID |

## 返回值
Promise 对象，包含流程实例信息。

## 功能描述
查询指定流程实例的信息。

## 示例
```typescript
const procInstance = await cx.svr.bpm.queryProcInst({ id: 'instance123' });
console.log(procInstance);
``` 