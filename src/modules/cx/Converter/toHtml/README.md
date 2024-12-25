# toHtml

转换为HTML。

## 语法

```javascript
Converter.toHtml(text)
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| text | String | 要转换的文本 |

## 返回值

| 类型 | 描述 |
|------|------|
| String | 转换后的HTML字符串 |

## 描述

将文本转换为HTML格式,主要用于处理特殊字符和换行符。转换规则包括:

- 将换行符(\n)转换为 <br>
- 将特殊字符转换为HTML实体
- 保留HTML标签

## 示例

```javascript
// 基本使用
const text = 'Hello\nWorld';
const html = cx.converter.toHtml(text);
console.log(html); // 输出: 'Hello<br>World'

// 处理特殊字符
const special = 'A & B < C > D';
const htmlSpecial = cx.converter.toHtml(special);
console.log(htmlSpecial); // 输出: 'A &amp; B &lt; C &gt; D'

// 保留HTML标签
const withTags = '<div>Hello</div>\n<span>World</span>';
const htmlTags = cx.converter.toHtml(withTags);
console.log(htmlTags); // 输出: '<div>Hello</div><br><span>World</span>'
``` 