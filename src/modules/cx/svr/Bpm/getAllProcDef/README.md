# getAllProcDef

取全部流程定义

## 方法签名
```typescript
static getAllProcDef(params: Object) => Promise
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| params | Object | 否 | 参数 |
| ├─ init | Number | 否 | 分页初始化 |
| ├─ pageno | Number | 否 | 分页页码 |
| └─ pagesize | Number | 否 | 分页大小 |

## 返回值
Promise 对象，包含所有流程定义信息。

## 功能描述
获取系统中所有的流程定义信息。

## 示例
```typescript
const procDefs = await cx.svr.bpm.getAllProcDef({ pageno: 1, pagesize: 10 });
console.log(procDefs);
``` 