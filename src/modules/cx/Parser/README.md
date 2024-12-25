# Parser

`Parser` 类提供了一系列解析和处理字符串的静态工具方法。

## 特点

- 静态方法调用，无需实例化
- 提供 CSS 字符串解析功能
- 提供 DOM data-options 解析功能
- 提供字符串处理工具方法
- 支持键值对设置和处理

## 静态方法

### parseCss
解析 CSS 字符串为对象。

### parseOptions
解析 DOM 元素的 data-options 字符串为对象。

### setKeyVal
设置对象的键值对。

### trim
去除字符串两端的空格。

## 使用示例

```javascript
// 解析 CSS 字符串
const cssObj = cx.parser.parseCss('margin: 0 2px; font-size: 14px');

// 解析 data-options 字符串
const options = cx.parser.parseOptions('region: center, fit: true, height: 32');

// 设置键值对
cx.parser.setKeyVal(obj, 'color', 'red', true);

// 去除空格
const trimmed = cx.parser.trim('  hello world  ');
```

## 注意事项

- 所有方法都是静态方法，通过 `cx.parser` 直接调用
- CSS 解析支持标准的 CSS 样式字符串
- data-options 解析支持逗号分隔的键值对
- 字符串处理会自动处理空值和异常情况 