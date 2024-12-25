# getProcDef

取流程定义

## 方法签名
```typescript
static getProcDef(params: Object) => Promise
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| params | Object | 是 | 参数 |
| └─ id | String | 是 | 流程定义ID |

## 返回值
Promise 对象，包含流程定义信息。

## 功能描述
获取指定流程定义的信息。

## 示例
```typescript
const procDef = await cx.svr.bpm.getProcDef({ id: 'procDef123' });
console.log(procDef);
``` 