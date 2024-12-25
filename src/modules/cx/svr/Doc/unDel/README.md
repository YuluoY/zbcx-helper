# unDel

从回收站撤销删除（根据ID）

## 方法签名
```typescript
static unDel(params: Object) => Promise
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| params | Object | 是 | 参数 |
| └─ id | String | 是 | 文档ID |

## 返回值
Promise 对象，返回结构：{ret: 0} 或 {数据对象}

## 功能描述
从回收站撤销删除（根据ID）。 