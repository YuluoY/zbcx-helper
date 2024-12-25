# getAllDeploy

取全部部署

## 方法签名
```typescript
static getAllDeploy(params: Object) => Promise
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| params | Object | 否 | 参数 |
| ├─ init | Number | 否 | 分页初始化 |
| ├─ pageno | Number | 否 | 分页页码 |
| └─ pagesize | Number | 否 | 分页大小 |

## 返回值
Promise 对象，包含所有部署信息。

## 功能描述
获取系统中所有的流程部署信息。

## 示例
```typescript
const deployments = await cx.svr.bpm.getAllDeploy({ pageno: 1, pagesize: 10 });
console.log(deployments);
``` 