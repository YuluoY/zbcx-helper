# sort

数据排序（支持多字段、多数据类型、升序/降序）。

## 语法

```javascript
sort(data, sorts)
```

## 参数

- `data` (Array): 排序数据
- `sorts` (Array): 排序信息数组 - [{ colname: String, desc: Boolean(是否降序), type: Number(cx.consts.TYPE_***) }]

## 描述

根据指定的字段和排序信息对数据进行排序。

## 示例

```javascript
const sortedData = cx.util.sort(data, sorts);
console.log('排序数据:', sortedData);
```

## 注意事项

- 此方法为静态方法，可以直接调用 