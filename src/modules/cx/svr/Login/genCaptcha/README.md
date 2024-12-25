# genCaptcha

免登陆服务 - 生成图形验证码

## 方法签名
```typescript
static genCaptcha(params: Object) => Promise
```

## 参数说明
- `params` (Object): 参数
  - `captchatype` (String): 验证码类型，SLIDER-滑块，ROTATE-旋转，CONCAT-拼接，IMAGE_TEXT-图片验证码，WORD_IMAGE_CLICK-文字图片点选

## 返回值
Promise 对象，返回数据结构 {ret:0, data: []}

## 功能描述
免登陆服务 - 生成图形验证码。

## 示例
```typescript
await cx.svr.login.genCaptcha({
  captchatype: "SLIDER"
});
``` 