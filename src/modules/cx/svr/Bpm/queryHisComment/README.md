# queryHisComment

查询完结流程的历史反馈信息

## 方法签名
```typescript
static queryHisComment(params: Object) => Promise
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| params | Object | 否 | 参数 |
| └─ id | Number | 否 | 流程实例ID |

## 返回值
Promise 对象，包含历史反馈信息。

## 功能描述
查询指定流程实例的历史反馈信息。

## 示例
```typescript
const comments = await cx.svr.bpm.queryHisComment({ id: 123 });
console.log(comments);
``` 