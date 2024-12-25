# sortDatetime

日期+时间排序。

## 语法

```javascript
sortDatetime(data, colname, desc) → {Array}
```

## 参数

- `data` (Array): 数据数组
- `colname` (String): 排序字段名
- `desc` (Boolean): 是否降序，默认值为false

## 返回值

- Array: 排序后的数据数组

## 描述

根据指定的日期和时间字段对数据进行排序。

## 示例

```javascript
const sortedData = cx.util.sortDatetime(data, 'datetime', true);
console.log('排序后的数据:', sortedData);
```

## 注意事项

- 此方法为静态方法，可以直接调用 