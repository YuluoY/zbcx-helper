# queryUserTask

取某个人的候选任务

## 方法签名
```typescript
static queryUserTask(params: Object) => Promise
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| params | Object | 否 | 参数 |
| ├─ prockey | String | 否 | 流程KEY |
| ├─ init | Number | 否 | 分页是否初始化(首次调用为0, 非第一次为1) |
| ├─ pageno | Number | 否 | 分页页码(1开始) |
| └─ pagesize | Number | 否 | 分页每页记录数 |

## 返回值
Promise 对象，包含候选任务信息。

## 功能描述
查询某个用户的候选任务信息。

## 示例
```typescript
const userTasks = await cx.svr.bpm.queryUserTask({ prockey: 'key123', pageno: 1 });
console.log(userTasks);
``` 