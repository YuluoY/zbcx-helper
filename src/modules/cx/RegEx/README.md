# RegEx

`cx.regex` 提供了一组常用的静态正则表达式变量。

## 静态变量

### cell
手机号码正则表达式。

### email
邮箱地址正则表达式。

### isBool
判断一个字符串是否为布尔值。

### isDate
判断一个字符串是否为日期。

### isFalse
判断一个字符串是否为 false。

### isInt
判断一个字符串是否为整数。

### isNumber
判断一个字符串是否为数字。

### isTimestamp
判断一个字符串是否为时间戳。

### isTrue
判断一个字符串是否为 true。

### password
密码规则正则表达式（大小写字母、数字、特殊字符，长度6-20）。

### refId
引用ID正则表达式（格式：{id}）。

### refVar
引用变量正则表达式（格式：{var}）。

### shortName
文件名的简称正则表达式。

### time
时间正则表达式（格式：H:mm:ss）。

### timestamp
时间戳正则表达式（格式：yyyy-MM-dd H:m:s.SSS）。

## 使用示例

```javascript
// 验证手机号码
const isValidCell = cx.regex.cell.test('13812345678');

// 验证邮箱地址
const isValidEmail = cx.regex.email.test('example@domain.com');

// 验证密码
const isValidPassword = cx.regex.password.test('Abc123!@#');

// 验证时间格式
const isValidTime = cx.regex.time.test('12:30:45');

// 验证时间戳格式
const isValidTimestamp = cx.regex.timestamp.test('2024-01-20 12:30:45.123');

// 判断是否为数字
const isNum = cx.regex.isNumber.test('123.45');

// 判断是否为布尔值
const isBoolValue = cx.regex.isBool.test('true');
```

## 注意事项

- 所有正则表达式都是静态的，直接通过 `cx.regex` 访问
- 使用 test() 方法来验证字符串是否匹配正则表达式
- 正则表达式区分大小写，除非特别说明
- 建议在进行字符串验证时使用这些预定义的正则表达式，以保持一致性 