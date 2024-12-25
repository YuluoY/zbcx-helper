# getVariables

取流程变量

## 方法签名
```typescript
static getVariables(params: Object) => Promise
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| params | Object | 是 | 参数 |
| └─ id | String | 是 | 流程实例ID |

## 返回值
Promise 对象，包含流程变量信息。

## 功能描述
获取指定流程实例的变量信息。

## 示例
```typescript
const variables = await cx.svr.bpm.getVariables({ id: 'instance123' });
console.log(variables);
``` 