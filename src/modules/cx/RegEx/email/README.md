# email

邮箱地址正则表达式。

## 语法

```javascript
cx.regex.email
```

## 类型

RegExp

## 说明

用于验证邮箱地址格式。

## 示例

```javascript
// 验证邮箱地址
const emailAddress = 'example@domain.com';
if (cx.regex.email.test(emailAddress)) {
    console.log('有效的邮箱地址');
} else {
    console.log('无效的邮箱地址');
}
```

## 注意事项

- 直接通过 cx.regex.email 访问
- 使用 test() 方法进行验证
- 返回布尔值表示是否匹配 