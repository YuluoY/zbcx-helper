# 分组相关常量

## GROUP_DATE
按日期分组。

## GROUP_IN
按包含关系分组。

## GROUP_MONTH
按月份分组。

## GROUP_RANGE
按范围分组。

## GROUP_TIME
按时间分组。

## GROUP_VALUE
按值分组。

## GROUP_YEAR
按年份分组。

## 示例

```js
// 按日期分组
data.groupBy(cx.consts.GROUP_DATE);

// 按月份分组
data.groupBy(cx.consts.GROUP_MONTH);

// 按年份分组
data.groupBy(cx.consts.GROUP_YEAR);

// 按值分组
data.groupBy(cx.consts.GROUP_VALUE);

// 按范围分组
data.groupBy(cx.consts.GROUP_RANGE);
``` 