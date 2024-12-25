# refVar

引用变量正则表达式。

## 语法

```javascript
cx.regex.refVar
```

## 类型

RegExp

## 说明

用于验证引用变量格式（格式：{var}）。

## 示例

```javascript
// 验证引用变量格式
const var1 = '{name}';
const var2 = '{value}';
const var3 = 'name';

console.log(cx.regex.refVar.test(var1));  // true
console.log(cx.regex.refVar.test(var2));  // true
console.log(cx.regex.refVar.test(var3));  // false
```

## 注意事项

- 直接通过 cx.regex.refVar 访问
- 使用 test() 方法进行验证
- 返回布尔值表示是否匹配
- 变量名必须被大括号{}包围 