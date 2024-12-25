# sortData

数据排序（根据主子类型、列名，根据配置的字段信息确定采用的数据排序（数值、字符串、日期、时间等））。

## 语法

```javascript
sortData(data, major, minor, colname, sort)
```

## 参数

- `data` (Array): 排序数据
- `major` (Number): 主类型
- `minor` (Number): 子类型
- `colname` (String): 字段列名
- `sort` (String): 排序方式 (ASC / DESC)

## 描述

根据指定的字段和排序信息对数据进行排序。

## 示例

```javascript
const sortedData = cx.util.sortData(data, major, minor, 'name', 'ASC');
console.log('排序数据:', sortedData);
```

## 注意事项

- 此方法为静态方法，可以直接调用 