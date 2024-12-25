# refId

引用ID正则表达式。

## 语法

```javascript
cx.regex.refId
```

## 类型

RegExp

## 说明

用于验证引用ID格式（格式：{id}）。

## 示例

```javascript
// 验证引用ID格式
const id1 = '{123}';
const id2 = '{abc}';
const id3 = '123';

console.log(cx.regex.refId.test(id1));  // true
console.log(cx.regex.refId.test(id2));  // true
console.log(cx.regex.refId.test(id3));  // false
```

## 注意事项

- 直接通过 cx.regex.refId 访问
- 使用 test() 方法进行验证
- 返回布尔值表示是否匹配
- ID必须被大括号{}包围 