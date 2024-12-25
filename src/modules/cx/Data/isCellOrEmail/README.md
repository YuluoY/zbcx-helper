# isCellOrEmail

判断账号是否为手机号或邮箱。

## 语法

```javascript
static isCellOrEmail(account)
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| account | String | 待验证的账号字符串 |

## 返回值

| 类型 | 描述 |
|------|------|
| Boolean | 如果账号是手机号或邮箱返回 true，否则返回 false |

## 描述

`isCellOrEmail` 方法用于验证一个账号字符串是否为有效的手机号或邮箱格式。它会:

1. 使用 `cx.RegEx.cell` 验证是否为手机号
2. 使用 `cx.RegEx.email` 验证是否为邮箱
3. 只要满足其中一种格式即返回 true

这个方法常用于:
- 账号格式验证
- 登录输入验证
- 用户注册验证
- 表单验证

## 示例

```javascript
// 验证手机号
console.log(cx.data.isCellOrEmail('13812345678')); // true

// 验证邮箱
console.log(cx.data.isCellOrEmail('user@example.com')); // true

// 验证无效格式
console.log(cx.data.isCellOrEmail('invalid-format')); // false

// 在表单验证中使用
function validateAccount(account) {
    if (!cx.data.isCellOrEmail(account)) {
        throw new Error('账号必须是手机号或邮箱格式');
    }
    return true;
}
``` 