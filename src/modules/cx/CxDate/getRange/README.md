# getRange

取时间范围。

## 语法

```javascript
static getRange(type)
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| type | String | 时间范围类型:<br>- 'curWeek': 本周<br>- 'curMonth': 本月<br>- 'preWeek': 上周<br>- 'preMonth': 上月<br>- 'nearWeek': 近一周<br>- 'nearMonth': 近一月<br>- 'nearThreeMonth': 近三月 |

## 返回值

| 类型 | 描述 |
|------|------|
| Object | 返回包含起止日期的对象:<br>- start: 开始日期<br>- end: 结束日期 |

## 描述

`getRange` 方法是一个统一的时间范围获取接口,根据传入的类型返回相应的时间范围。它会:

1. 根据类型选择对应的时间范围计算方法
2. 计算并返回时间范围对象

这个方法常用于:
- 统一的时间范围选择
- 报表日期范围设置
- 数据查询时间范围

## 示例

```javascript
// 获取本周范围
const thisWeek = cx.date.getRange('curWeek');
console.log('本周:', thisWeek);

// 获取本月范围
const thisMonth = cx.date.getRange('curMonth');
console.log('本月:', thisMonth);

// 获取近三个月范围
const threeMonths = cx.date.getRange('nearThreeMonth');
console.log('近三月:', threeMonths);

// 在日期选择器中使用
const dateRanges = {
    '本周': cx.date.getRange('curWeek'),
    '本月': cx.date.getRange('curMonth'),
    '上周': cx.date.getRange('preWeek'),
    '上月': cx.date.getRange('preMonth'),
    '近一周': cx.date.getRange('nearWeek'),
    '近一月': cx.date.getRange('nearMonth'),
    '近三月': cx.date.getRange('nearThreeMonth')
};

// 根据用户选择获取日期范围
function getDateRange(rangeType) {
    return cx.date.getRange(rangeType);
}

// 用于数据查询
const queryData = {
    dateRange: cx.date.getRange('curMonth'),
    type: 'monthly'
};
``` 