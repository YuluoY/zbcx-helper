# shortName

文件名的简称正则表达式。

## 语法

```javascript
cx.regex.shortName
```

## 类型

RegExp

## 说明

用于验证文件名的简称格式。

## 示例

```javascript
// 验证文件名简称
const name1 = 'file_name';
const name2 = 'file-name';
const name3 = 'file/name';

console.log(cx.regex.shortName.test(name1));  // true
console.log(cx.regex.shortName.test(name2));  // true
console.log(cx.regex.shortName.test(name3));  // false
```

## 注意事项

- 直接通过 cx.regex.shortName 访问
- 使用 test() 方法进行验证
- 返回布尔值表示是否匹配
- 支持字母、数字、下划线和连字符
- 不支持特殊字符和路径分隔符 