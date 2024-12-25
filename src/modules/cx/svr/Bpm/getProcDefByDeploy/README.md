# getProcDefByDeploy

根据部署ID取流程定义

## 方法签名
```typescript
static getProcDefByDeploy(params: Object) => Promise
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| params | Object | 是 | 参数 |
| └─ id | String | 是 | 部署ID |

## 返回值
Promise 对象，包含流程定义信息。

## 功能描述
根据部署ID获取流程定义信息。

## 示例
```typescript
const procDef = await cx.svr.bpm.getProcDefByDeploy({ id: 'deploy123' });
console.log(procDef);
``` 