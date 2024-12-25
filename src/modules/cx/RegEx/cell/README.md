# cell

手机号码正则表达式。

## 语法

```javascript
cx.regex.cell
```

## 类型

RegExp

## 说明

用于验证手机号码格式。

## 示例

```javascript
// 验证手机号码
const phoneNumber = '13812345678';
if (cx.regex.cell.test(phoneNumber)) {
    console.log('有效的手机号码');
} else {
    console.log('无效的手机号码');
}
```

## 注意事项

- 直接通过 cx.regex.cell 访问
- 使用 test() 方法进行验证
- 返回布尔值表示是否匹配 