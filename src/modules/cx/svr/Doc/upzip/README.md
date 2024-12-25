# upzip

解压缩文件并在media表写入记录

## 方法签名
```typescript
static upzip(params: Object) => Promise
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| params | Object | 是 | 参数 |
| ├─ major | Number | 是 | 关联实体主类型 |
| ├─ minor | Number | 是 | 关联实体子类型 |
| ├─ entityid | Number | 是 | 关联实体id |
| └─ filename | String | 是 | 文件路径，基于filesys的路径，如 uploadfile:activitiSvr.zip |

## 返回值
Promise 对象，请求对象，返回数据结构 {ret:0}

## 功能描述
解压缩文件并在media表写入记录。 