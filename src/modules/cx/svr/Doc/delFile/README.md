# delFile

删除文档到回收站（根据 media 表的 filename 字段）

## 方法签名
```typescript
static delFile(params: Object) => Promise
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| params | Object | 是 | 参数 |
| ├─ filename | String | 是 | 文档 filename 列表(多个 filename 之间用,分隔) |
| └─ retAtt | Number | 否 | 是否返回整条记录，0-不返回，1-返回 |

## 返回值
Promise 对象

## 功能描述
删除文档到回收站（根据 media 表的 filename 字段）。

## 示例
```typescript
await cx.svr.doc.delFile({ filename: 'file1,file2', retAtt: 1 });
``` 