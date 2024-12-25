# delDeployment

删除部署

## 方法签名
```typescript
static delDeployment(params: Object) => Promise
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| params | Object | 是 | 参数 |
| └─ id | String | 是 | 部署ID |

## 返回值
Promise 对象

## 功能描述
删除指定的流程部署。

## 示例
```typescript
await cx.svr.bpm.delDeployment({ id: 'deploy123' });
``` 