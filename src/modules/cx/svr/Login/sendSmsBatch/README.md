# sendSmsBatch

免登陆服务 - 批量发送手机验证码，基于cx_smsconfig配置表，type=1是验证码模式

## 方法签名
```typescript
static sendSmsBatch(params: Object) => Promise
```

## 参数说明
- `params` (Object): 参数对象
  - `cell` (String): 手机号，多个时用逗号分隔
  - `keyno` (String): cx_smsconfig表的keyno，用于获取配置的模板
  - `data` (Array.<Object>): keyno对应模板temp1Parms字段中有变量时，变量作为key的对象序列，对象顺序与cell匹配

## 返回值
Promise 对象，返回数据结构 {ret:0, data: []}

## 功能描述
免登陆服务 - 批量发送手机验证码，基于cx_smsconfig配置表，type=1是验证码模式。

## 示例
```typescript
await cx.svr.login.sendSmsBatch({
  cell: "13800138000,13800138001",
  keyno: "SMS_TEMPLATE_1",
  data: [
    { name: "张三", code: "123456" },
    { name: "李四", code: "654321" }
  ]
});
``` 