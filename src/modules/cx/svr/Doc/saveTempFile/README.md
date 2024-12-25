# saveTempFile

将临时文件存入文档库

## 方法签名
```typescript
static saveTempFile(params: Object) => Promise
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| params | Object | 是 | 参数 |
| ├─ filename | String | 是 | 相对根的文件名序列, 多个用,分隔 |
| ├─ title | String | 是 | 文件原始名称, 多个用,分隔 |
| ├─ filelength | String | 是 | 文件长度, 多个用,分隔 |
| └─ * | * | 否 | 其他存储到 cx_media 的参数 |

## 返回值
Promise 对象

## 功能描述
将临时文件存入文档库。 