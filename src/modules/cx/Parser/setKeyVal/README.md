# setKeyVal

设置键值对。

## 语法

```javascript
static setKeyVal(obj: string, key: string, value: string, bStr: boolean)
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| obj | string | 目标对象 |
| key | string | 键名 |
| value | string | 值 |
| bStr | boolean | 是否是引号括起来('...')格式的字符串 |

## 返回值

无

## 示例

```javascript
const target = {};

// 设置普通字符串值
cx.parser.setKeyVal(target, 'name', 'John', false);
console.log(target.name); // 输出: John

// 设置带引号的字符串值
cx.parser.setKeyVal(target, 'description', "'A developer'", true);
console.log(target.description); // 输出: A developer

// 设置多个值
cx.parser.setKeyVal(target, 'age', '25', false);
cx.parser.setKeyVal(target, 'role', "'admin'", true);
console.log(target);
// 输出: {
//   name: 'John',
//   description: 'A developer',
//   age: '25',
//   role: 'admin'
// }
```

## 注意事项

- 当 bStr 为 true 时，会自动去除值两端的引号
- 如果目标对象不存在，将会抛出错误
- 键名不能为空
- 该方法会直接修改原对象 