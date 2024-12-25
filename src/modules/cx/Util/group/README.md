# group

多级数据分组(支持多个字段逐级递归分组)。

## 语法

```javascript
group(data, groups) → {Object}
```

## 参数

- `data` (Array): 待分组数据
- `groups` (Array): 分组信息 - [{ colname: String, type: cx.consts.GROUP_***, [values: []] }]

## 返回值

- Object: 分组后的数据结构

## 描述

根据指定的字段和类型对数据进行多级分组。

## 示例

```javascript
const groupedData = cx.util.group(data, groups);
console.log('分组数据:', groupedData);
```

## 注意事项

- 此方法为静态方法，可以直接调用 