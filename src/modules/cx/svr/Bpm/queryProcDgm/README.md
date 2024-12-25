# queryProcDgm

查询流程的跟踪图

## 方法签名
```typescript
static queryProcDgm(params: Object) => Promise
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| params | Object | 否 | 参数 |
| └─ id | String | 否 | 流程实例ID |

## 返回值
Promise 对象，包含流程跟踪图信息。

## 功能描述
查询指定流程实例的跟踪图信息。

## 示例
```typescript
const procDiagram = await cx.svr.bpm.queryProcDgm({ id: 'instance123' });
console.log(procDiagram);
``` 