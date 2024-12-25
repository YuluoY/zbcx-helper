# startProcess

启动流程

## 方法签名
```typescript
static startProcess(params: Object) => Promise
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| params | Object | 否 | 参数 |
| ├─ id | String | 否 | 流程定义ID |
| ├─ bill | String | 否 | 工单号的名字 |
| ├─ FILES_ | String | 否 | 附件列表 |
| └─ FK_ | String | 否 | 变量(支持多个变量, 变量名以 'FK_' 开头) |

## 返回值
Promise 对象，表示流程启动的结果。

## 功能描述
启动指定的流程。

## 示例
```typescript
await cx.svr.bpm.startProcess({ id: 'procDef123', bill: 'bill123', FILES_: 'file1,file2', FK_: 'FK_var=value' });
``` 