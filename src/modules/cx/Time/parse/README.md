# parse

根据字符串解析时间。

## 语法

```javascript
parse(str) → {Object}
```

## 参数

- str: String - 时间字符串

## 返回值

- Object - 解析后的时间对象

## 描述

将给定的时间字符串解析为时间对象。

## 示例

```javascript
const timeStr = '09:00';
const timeObj = cx.time.parse(timeStr);
console.log('解析后的时间对象:', timeObj);
// 输出: {hour: 9, minute: 0}
```

## 注意事项

- 确保传递正确的时间字符串
- 支持的格式包括 'HH:mm:ss' 和 'HH:mm' 