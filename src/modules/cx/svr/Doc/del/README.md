# del

删除文档到回收站（根据ID）

## 方法签名
```typescript
static del(params: Object) => Promise
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| params | Object | 是 | 参数 |
| ├─ id | String | 是 | 文档ID列表(多个文件ID之间用,分隔) |
| └─ retAtt | Number | 否 | 是否返回整条记录，0-不返回，1-返回 |

## 返回值
Promise 对象，返回结构：{ret: 0} 或 {数据对象}

## 功能描述
删除文档到回收站（根据ID）。

## 示例
```typescript
await cx.svr.doc.del({ id: '123,124', retAtt: 1 });
``` 