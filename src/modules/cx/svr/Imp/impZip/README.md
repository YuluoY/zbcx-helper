# impZip

导入压缩包

## 方法签名
```typescript
static impZip(major: String, minor: Number, params: Object) => Promise
```

## 参数说明
- `major` (String): 关联实体主类型
- `minor` (Number): 关联实体子类型
- `params` (Object): 参数
  - `fld` (String, optional): 根据解压后文件名去major,minor关联表,用fld字段查询实体id
  - `filename` (String): 文件路径名
  - `dir` (String): 解压目录

## 返回值
Promise 对象

## 功能描述
导入压缩包文件并进行解压处理。

## 示例
```typescript
await cx.svr.imp.impZip('entity', 1, { 
  fld: 'name',
  filename: 'path/to/archive.zip',
  dir: 'path/to/extract'
});
``` 