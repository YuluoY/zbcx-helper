# genThumbnail

生成缩略图

## 方法签名
```typescript
static genThumbnail(params: Object) => Promise
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| params | Object | 是 | 参数 |
| ├─ id | Number | 是 | 文档ID |
| ├─ width | Number | 是 | 缩略图宽度 |
| ├─ height | Number | 是 | 缩略图高度 |
| └─ force | Boolean | 否 | 是否保持原图的高宽比(0-否，非0-是) |

## 返回值
Promise 对象

## 功能描述
生成缩略图。 