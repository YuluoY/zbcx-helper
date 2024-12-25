# sendMail

发送邮件

## 方法签名
```typescript
static sendMail(params: Object) => Promise
```

## 参数说明
- `params` (Object): 参数
  - `to` (String): 发送给邮箱(多个用,分隔)
  - `cc` (String, optional): 抄送邮箱(多个用,分隔)
  - `bcc` (String, optional): 密抄邮箱(多个用,分隔)
  - `subject` (String, optional): 主题
  - `content` (String, optional): 内容

## 返回值
Promise 对象

## 功能描述
发送邮件。

## 示例
```typescript
await cx.svr.mail.sendMail({
  to: "example1@mail.com,example2@mail.com",
  cc: "cc@mail.com",
  bcc: "bcc@mail.com",
  subject: "Hello",
  content: "This is a test email."
});
``` 