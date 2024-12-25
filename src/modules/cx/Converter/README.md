# Converter

数据转换工具类,提供了一系列用于数据格式转换的静态方法。

## 方法

### [array2List](array2List/README.md)
数组转列表。

### [data2String](data2String/README.md)
数据转字符串。

### [parseReference](parseReference/README.md)
解析引用。

### [toHtml](toHtml/README.md)
转换为HTML。

### [toJSON](toJSON/README.md)
转换为JSON。

## 示例

```javascript
// 数组转列表
const list = cx.converter.array2List(['a', 'b', 'c']);

// 数据转字符串
const str = cx.converter.data2String({name: 'test'});

// 转换为JSON
const json = cx.converter.toJSON('{"name": "test"}');

// 转换为HTML
const html = cx.converter.toHtml('<div>test</div>');
``` 