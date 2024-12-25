# CxDate

日期处理工具类,提供了一系列用于日期操作和计算的静态方法。

## 方法

### [addDays](addDays/README.md)
日期增加指定的天数。

### [compare](compare/README.md)
比较两个日期。

### [copy](copy/README.md)
复制日期对象。

### [diffDat](diffDat/README.md)
计算两个日期之间的差值。

### [diffDays](diffDays/README.md)
计算两个日期之间的天数差。

### [equals](equals/README.md)
判断两个日期是否相等。

### [getDatesCurMonth](getDatesCurMonth/README.md)
获取本月的起止日期。

### [getDatesCurWeek](getDatesCurWeek/README.md)
获取本周的起止日期。

### [getDatesPreMonth](getDatesPreMonth/README.md)
获取上月的起止日期。

### [getDatesPreWeek](getDatesPreWeek/README.md)
获取上周的起止日期。

### [getDaysByMonth](getDaysByMonth/README.md)
获取指定月份的天数。

### [getExpire](getExpire/README.md)
获取过期时间。

### [getNearMonth](getNearMonth/README.md)
获取当天算起的近一个月起止日期。

### [getNearThreeMonth](getNearThreeMonth/README.md)
获取当天算起的近���个月起止日期。

### [getNearWeek](getNearWeek/README.md)
获取当天算起的近一周起止日期。

### [getRange](getRange/README.md)
取时间范围。

### [isDate](isDate/README.md)
判断是否为日期对象。

### [isIn](isIn/README.md)
判断日期是否在指定范围内。

### [isLeapYear](isLeapYear/README.md)
判断是否为闰年。

### [parse](parse/README.md)
解析日期字符串。

### [today](today/README.md)
取今天的日期。

## 示例

```javascript
// 获取今天日期
const today = cx.date.today();

// 增加天数
const nextWeek = cx.date.addDays(today, 7);

// 比较日期
const result = cx.date.compare(today, nextWeek); // 返回 -1

// 获取日期范围
const weekRange = cx.date.getDatesCurWeek();
const monthRange = cx.date.getDatesCurMonth();

// 判断闰年
const isLeap = cx.date.isLeapYear(2024); // 返回 true

// 解析日期字符串
const date = cx.date.parse('2024-01-01');
```