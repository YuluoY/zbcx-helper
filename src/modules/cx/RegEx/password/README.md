# password

密码规则正则表达式。

## 语法

```javascript
cx.regex.password
```

## 类型

RegExp

## 说明

用于验证密码格式是否符合规则（大小写字母、数字、特殊字符，长度6-20）。

## 示例

```javascript
// 验证密码格式
const password1 = 'Abc123!@#';
const password2 = 'abc123';
const password3 = '12345';

console.log(cx.regex.password.test(password1));  // true
console.log(cx.regex.password.test(password2));  // false
console.log(cx.regex.password.test(password3));  // false
```

## 注意事项

- 直接通过 cx.regex.password 访问
- 使用 test() 方法进行验证
- 返回布尔值表示是否匹配
- 密码必须包含大小写字母、数字和特殊字符
- 密码长度必须在6-20位之间 