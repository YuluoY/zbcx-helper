# format

格式化数据。

## 语法

```js
cx.datafmt.format(value, name)
```

### 参数

- `value` (*): 需要格式化的数据值
- `name` (String): 数据格式命名，见 cx_datafmt 表的 name

### 返回值

- (String): 格式化后的字符串

## 描述

`format` 方法用于使用指定的格式化对象对数据进行格式化。支持多种数据类型和格式化方式。

支持的格式化类型包括：
- 日期时间（Date、Datetime、Time）
- 数字（Number、Currency）
- 文件大小（Filelen）
- 经纬度（Dms）
- 时长（Duration）
- 表达式（Exp）
- 等

## 示例

```js
// 日期格式化
const date = new Date();
const formattedDate = cx.datafmt.format(date, 'dateFormat');
console.log(formattedDate); // 输出: 2024-01-18

// 数字格式化
const number = 1234567.89;
const formattedNumber = cx.datafmt.format(number, 'numberFormat');
console.log(formattedNumber); // 输出: 1,234,567.89

// 文件大小格式化
const fileSize = 1024 * 1024;
const formattedSize = cx.datafmt.format(fileSize, 'fileSize');
console.log(formattedSize); // 输出: 1MB

// 时长格式化
const duration = 3600;
const formattedDuration = cx.datafmt.format(duration, 'duration');
console.log(formattedDuration); // 输出: 1小时
```

## 相关

- [add](../add/README.md)
- [del](../del/README.md)
- [get](../get/README.md) 