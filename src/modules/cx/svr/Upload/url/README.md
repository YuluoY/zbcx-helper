# url

取upload服务对应的网址

## 方法签名
```typescript
static url(params: Object) => String
```

## 参数说明
- `params` (Object): 传递的参数
  - `saveto` (String): 文件存储
  - `dir` (String, optional): 存储的相对路径
  - `major` (Number, optional): 关联实体主类型
  - `minor` (Number, optional): 关联实体子类型
  - `entityid` (Number, optional): 关联实体id
  - `*` (*, optional): media表其他属性

## 返回值
服务网址

## 功能描述
获取upload服务对应的网址。

## 示例
```typescript
const uploadUrl = cx.svr.upload.url({
  saveto: "FileSys",
  dir: "uploads/images",
  major: 1,
  minor: 2,
  entityid: 123
});
``` 