# trim

去除字符串两端的空格。

## 语法

```javascript
static trim(str: string): string
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| str | string | 需要处理的字符串 |

## 返回值

返回处理后的字符串。

## 示例

```javascript
// 去除两端空格
const text1 = cx.parser.trim('  Hello World  ');
console.log(text1); // 输出: "Hello World"

// 处理只有一端有空格的字符串
const text2 = cx.parser.trim('Hello  ');
console.log(text2); // 输出: "Hello"

const text3 = cx.parser.trim('  World');
console.log(text3); // 输出: "World"

// 处理中间有空格的字符串（中间空格会保留）
const text4 = cx.parser.trim('  Hello   World  ');
console.log(text4); // 输出: "Hello   World"
```

## 注意事项

- 只去除字符串两端的空格，不影响字符串中间的空格
- 如果输入为 null 或 undefined，将返回空字符串
- 支持处理制表符和换行符等空白字符 