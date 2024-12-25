# grpByValRange

根据分组值域valRange和数据对象序列values的关键字段的值进行分组。

## 语法

```javascript
grpByValRange(values, keyFld, valRange) → {Object|Array|Array|Array}
```

## 参数

- `values` (Array): 数组
- `keyFld` (String): key字段
- `valRange` (Array.<Number>): 分组的值域序列

## 返回值

- Object: 分组后的数据
  - `returns.nums` (Array): 每组的数量
  - `returns.vals` (Array): 分组的值界限
  - `returns.items` (Array): 每组的原数据对象序列

## 描述

根据指定的值域和关键字段对数据进行分组。

## 示例

```javascript
const result = cx.util.grpByValRange(values, 'key', [0, 10, 20]);
console.log('分组结果:', result);
```

## 注意事项

- 此方法为静态方法，可以直接调用 