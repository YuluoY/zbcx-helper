# login

登录服务 - 用户登录

## 方法签名
```typescript
static login(params: Object) => Promise
```

## 参数说明
- `params` (Object): 参数
  - `account` (String): 用户账号
  - `time` (String): 时间戳 1691691719789, 通过获取cx.datetime.now().getTime()
  - `type` (String, optional): 登录方式（LOGIN_ACCOUNT/1-账号密码，LOGIN_MAIL/2-邮箱验证码，LOGIN_CELL/3-手机验证码）
  - `password` (String, optional): 密码(type = LOGIN_ACCOUNT/1 时必传)
  - `code` (String, optional): 验证码(type = LOGIN_MAIL/2、LOGIN_CELL/3 时必传)
  - `captchaid` (String, optional): 图形验证码id，genCaptcha服务返回的id
  - `captchatype` (String, optional): 图形验证码类型，SLIDER-滑块，ROTATE-旋转，CONCAT-拼接，IMAGE_TEXT-图片验证码，WORD_IMAGE_CLICK-文字图片点选
  - `captchacode` (String, optional): 文本验证码需要传的参数
  - `imageCaptchaTrack` (Object, optional): 文本验证码需要传的参数
    - `bgImageWidth` (Object, optional): 图片宽
    - `bgImageHeight` (Object, optional): 图片高
    - `sliderImageWidth` (Object, optional): 滑块宽
    - `sliderImageHeight` (Object, optional): 滑块高
    - `startSlidingTime` (Object, optional): 滑动开始时间
    - `entSlidingTime` (Object, optional): 滑动结束时间
    - `trackList` (Array.<Object>, optional): 滑动轨迹数组，每个对象结构为 {x, y, t, type}

## 返回值
- `result.ret` (String): 请求结果，0-成功
- `result.userno` (String): 用户账号
- `result.username` (String): 用户名
- `result.Authorization` (String): 认证

## 功能描述
登录服务 - 用户登录。

## 示例
```typescript
// 账号密码登录
await cx.svr.login.login({
  account: "username",
  password: "password123",
  time: cx.datetime.now().getTime(),
  type: "LOGIN_ACCOUNT"
});

// 邮箱验证码登录
await cx.svr.login.login({
  account: "example@email.com",
  code: "123456",
  time: cx.datetime.now().getTime(),
  type: "LOGIN_MAIL"
});
``` 