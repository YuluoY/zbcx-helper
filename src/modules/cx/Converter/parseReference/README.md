# parseReference

解析引用。

## 语法

```javascript
Converter.parseReference(text)
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| text | String | 要解析的文本 |

## 返回值

| 类型 | 描述 |
|------|------|
| Array | 解析出的引用数组 |

## 描述

解析文本中的引用标记,返回引用数组。引用标记使用特定的语法(如 ${reference})来标识。

## 示例

```javascript
// 基本使用
const text = 'Hello ${name}, your age is ${age}';
const refs = cx.converter.parseReference(text);
console.log(refs); // 输出: ['name', 'age']

// 解析嵌套引用
const nested = 'User ${user.name} lives in ${user.address.city}';
const nestedRefs = cx.converter.parseReference(nested);
console.log(nestedRefs); // 输出: ['user.name', 'user.address.city']

// 处理重复引用
const repeated = '${id} and ${id} again';
const repeatedRefs = cx.converter.parseReference(repeated);
console.log(repeatedRefs); // 输出: ['id']
``` 