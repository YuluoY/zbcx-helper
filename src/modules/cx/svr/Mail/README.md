# Mail

邮件服务类

## 类名
cx.svr.mail

## 功能说明
提供邮件发送、模板邮件发送等服务。

## 方法列表
| 方法名 | 说明 | 文档链接 |
|--------|------|----------|
| sendMail | 发送邮件 | [查看详情](./sendMail/README.md) |
| sendTemplateMail | 发送模板邮件 | [查看详情](./sendTemplateMail/README.md) |
| url | 取服务对应的网址 | [查看详情](./url/README.md) |

## 使用示例
```typescript
// 发送邮件
await cx.svr.mail.sendMail({
  to: "example1@mail.com",
  subject: "Test",
  content: "This is a test email."
});

// 发送模板邮件
await cx.svr.mail.sendTemplateMail({
  to: "example1@mail.com",
  template: "welcome.html",
  data: { name: "User" }
});

// 获取服务网址
const serviceUrl = cx.svr.mail.url();
``` 