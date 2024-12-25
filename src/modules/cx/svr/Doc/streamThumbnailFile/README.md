# streamThumbnailFile

取文档缩略图输出到流的URL（根据文件名及存储模式）

## 方法签名
```typescript
static streamThumbnailFile(params: Object) => String
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| params | Object | 是 | 参数 |
| ├─ filename | String | 是 | 文档ID |
| ├─ mode | Number | 是 | 存储模式 |
| ├─ width | Number | 是 | 缩略图宽度 |
| └─ height | Number | 是 | 缩略图高度 |

## 返回值
String

## 功能描述
取文档缩略图输出到流的URL（根据文件名及存储模式）。 