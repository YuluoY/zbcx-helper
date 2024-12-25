# parseCss

解析 CSS 字符串。

## 语法

```javascript
static parseCss(str: string | Object): Object
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| str | string \| Object | CSS 字符串（如 "margin:0 2px;font-family:Microsoft Yahei;height:.32rem"）|

## 返回值

返回解析后的 CSS 对象。

## 示例

```javascript
// 解析简单的 CSS 字符串
const css1 = cx.parser.parseCss('margin: 0; padding: 10px');
console.log(css1);
// 输出: { margin: '0', padding: '10px' }

// 解析复杂的 CSS 字符串
const css2 = cx.parser.parseCss('font-family: Microsoft Yahei; font-size: 14px; line-height: 1.5');
console.log(css2);
// 输出: {
//   'font-family': 'Microsoft Yahei',
//   'font-size': '14px',
//   'line-height': '1.5'
// }

// 解析包含多个值的属性
const css3 = cx.parser.parseCss('margin: 10px 20px 15px 25px');
console.log(css3);
// 输出: { margin: '10px 20px 15px 25px' }
```

## 注意事项

- 支持标准的 CSS 样式字符串格式
- 属性名会保持原样，包括连字符（如 'font-size'）
- 支持带空格的属性值
- 如果输入的是对象，将直接返回该对象
- 无效的 CSS 字符串可能会返回空对象