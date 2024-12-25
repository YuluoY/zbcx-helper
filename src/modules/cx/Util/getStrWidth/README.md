# getStrWidth

根据字体大小获取字符串的宽度。

## 语法

```javascript
getStrWidth(textStr, fontSize) → {Number}
```

## 参数

- `textStr` (String): 字符串文本
- `fontSize` (Number): 字体大小，默认值为10

## 返回值

- Number: 字符串的宽度

## 描述

根据指定的字体大小计算字符串的宽度。

## 示例

```javascript
const width = cx.util.getStrWidth('Hello', 12);
console.log('字符串宽度:', width);
```

## 注意事项

- 此方法为静态方法，可以直接调用 