# isTrue

判断一个字符串是否为 true。

## 语法

```javascript
cx.regex.isTrue
```

## 类型

RegExp

## 说明

判断一个字符串是否为布尔值 true。

## 示例

```javascript
// 判断是否为 true
const value1 = 'true';
const value2 = 'false';
const value3 = 'other';

console.log(cx.regex.isTrue.test(value1));  // true
console.log(cx.regex.isTrue.test(value2));  // false
console.log(cx.regex.isTrue.test(value3));  // false
```

## 注意事项

- 直接通过 cx.regex.isTrue 访问
- 使用 test() 方法进行验证
- 返回布尔值表示是否匹配
- 只识别字符串 'true'
``` 
</rewritten_file>