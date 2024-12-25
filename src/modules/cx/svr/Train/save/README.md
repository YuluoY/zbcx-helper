# save

把上传文件保存成培训支持的文件格式

## 方法签名
```typescript
static save(params: Object)
```

## 参数说明
- `params` (Object): 参数
  - `dirid` (Number): 目录ID
  - `filename` (String): 文件名(注意：放在临时文件夹)
  - `path` (String): 父目录
  - `title` (String): 标题
  - `intro` (String): 简介
  - `length` (String): 页数或者长度

## 返回值
Promise 对象，返回请求对象

## 功能描述
将上传的文件转换并保存为培训系统支持的文件格式。

## 示例
```typescript
await cx.svr.train.save({
  dirid: 123,
  filename: "training.pdf",
  path: "courses/basic",
  title: "基础培训课程",
  intro: "这是一个基础培训课程",
  length: "30"
});
``` 