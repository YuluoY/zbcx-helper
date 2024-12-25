# unzip

把上传文件保存成培训支持的文件格式

## 方法签名
```typescript
static unzip(params: Object)
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
解压上传的文件并保存为培训系统支持的格式。

## 示例
```typescript
await cx.svr.train.unzip({
  dirid: 123,
  filename: "training.zip",
  path: "courses/advanced",
  title: "高级培训课程",
  intro: "这是一个高级培训课程",
  length: "50"
});
``` 