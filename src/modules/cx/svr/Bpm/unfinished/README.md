# unfinished

查询未完成流程

## 方法签名
```typescript
static unfinished(params: Object) => Promise
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| params | Object | 否 | 参数 |
| ├─ userid | String | 否 | 用户ID |
| ├─ prockey | String | 否 | 流程KEY |
| ├─ init | Number | 否 | 分页是否初始化(首次调用为0, 非第一次为1) |
| ├─ pageno | Number | 否 | 分页页码(1开始) |
| └─ pagesize | Number | 否 | 分页每页记录数 |

## 返回值
Promise 对象，包含未完成流程信息。

## 功能描述
查询系统中符合条件的未完成流程信息。

## 示例
```typescript
const unfinishedProcesses = await cx.svr.bpm.unfinished({ userid: 'user123', pageno: 1 });
console.log(unfinishedProcesses);
``` 