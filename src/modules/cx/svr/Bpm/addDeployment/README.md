# addDeployment

部署流程

## 方法签名
```typescript
static addDeployment(params: Object) => Promise
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| params | Object | 是 | 参数 |
| ├─ filename | String | 是 | 文件名(上传后是内部名称，用户看不到) |
| └─ name | String | 是 | 本次部署的名称 |

## 返回值
Promise 对象

## 功能描述
部署新的流程定义。

## 示例
```typescript
await cx.svr.bpm.addDeployment({ filename: 'process.bpmn', name: 'New Process' });
``` 