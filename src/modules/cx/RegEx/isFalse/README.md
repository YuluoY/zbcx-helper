# isFalse

判断一个字符串是否为 false。

## 语法

```javascript
cx.regex.isFalse
```

## 类型

RegExp

## 说明

判断一个字符串是否为布尔值 false。

## 示例

```javascript
// 判断是否为 false
const value1 = 'false';
const value2 = 'true';
const value3 = 'other';

console.log(cx.regex.isFalse.test(value1));  // true
console.log(cx.regex.isFalse.test(value2));  // false
console.log(cx.regex.isFalse.test(value3));  // false
```

## 注意事项

- 直接通过 cx.regex.isFalse 访问
- 使用 test() 方法进行验证
- 返回布尔值表示是否匹配
- 只识别字符串 'false'
``` 
</rewritten_file>