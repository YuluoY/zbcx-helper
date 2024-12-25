# delEntity

删除文档到回收站（根据实体主子类型、ID）

## 方法签名
```typescript
static delEntity(params: Object) => Promise
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| params | Object | 是 | 参数 |
| ├─ major | Number | 是 | 实体主类型 |
| ├─ minor | Number | 是 | 实体子类型 |
| ├─ entityid | Number | 是 | 实体ID |
| └─ retAtt | Number | 否 | 是否返回整条记录，0-不返回，1-返回 |

## 返回值
Promise 对象，返回结构：{ret: 0, [data]: [{数据对象}, ...]}；retAtt=1 时才有data

## 功能描述
删除文档到回收站（根据实体主子类型、ID）。

## 示例
```typescript
await cx.svr.doc.delEntity({ major: 1, minor: 2, entityid: 123, retAtt: 1 });
``` 