# del

删除操作

## 方法签名
```typescript
static del(major: number, minor: number, oldAtt: Object) => Promise
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| major | Number | 是 | 主类型 |
| minor | Number | 是 | 子类型 |
| oldAtt | Object | 是 | 原始数据对象 |

## 返回值
Promise 对象

## 功能描述
执行单条记录的删除操作。

## 示例
```typescript
await cx.svr.attOper.del(1, 2, { id: 1, name: "test" });
``` 