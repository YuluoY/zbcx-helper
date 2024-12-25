# addLoginTime

登录信息增加登录时间。

## 语法

```javascript
static addLoginTime(params, encode)
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| params | Object | 登录参数对象 |
| encode | Function | 登录信息加密函数 |

## 返回值

无

## 描述

`addLoginTime` 方法用于在登录信息中添加登录时间。它会:

1. 获取当前时间戳
2. 将时间戳添加到登录参数中
3. 如果提供了加密函数，会对时间戳进行加密处理

这个方法常用于:
- 记录用户登录时间
- 登录认证
- 登录日志记录

## 示例

```javascript
// 添加登录时间（不加密）
const loginParams = {
    username: 'admin',
    password: '123456'
};
cx.data.addLoginTime(loginParams);

// 添加登录时间（需要加密）
const loginParamsWithEncode = {
    username: 'admin',
    password: '123456'
};
cx.data.addLoginTime(loginParamsWithEncode, (time) => {
    // 对时间进行加密处理
    return encryptTime(time);
});
``` 