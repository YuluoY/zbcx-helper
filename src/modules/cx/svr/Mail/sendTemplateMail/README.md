# sendTemplateMail

发送模板邮件

## 方法签名
```typescript
static sendTemplateMail(params: Object) => Promise
```

## 参数说明
- `params` (Object): 参数
  - `to` (String): 发送给(多个用,分隔)
  - `template` (String): 模板文件名称(存放在 服务器的 template 目录下，一般为 html 格式文件)
  - `data` (Object, optional): 模板文件中需要替换的值，采用 freemarker 格式，变量用 ${变量名}
  - `cc` (String, optional): 抄送(多个用,分隔)
  - `bcc` (String, optional): 密抄(多个用,分隔)
  - `subject` (String, optional): 主题(如果没有指定该参数，则从模板文件的 查找用作邮件主题)

## 返回值
Promise 对象

## 功能描述
发送模板邮件。

## 示例
```typescript
await cx.svr.mail.sendTemplateMail({
  to: "example1@mail.com",
  template: "welcome.html",
  data: { name: "User" },
  subject: "Welcome!"
});
``` 