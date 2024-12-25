# equalValGap

根据数据对象数组values和关键字段的值进行开序排序，并把keyFld字段的值等间距分层partNum组。

## 语法

```javascript
equalValGap(values, keyFld, partNum) → {Object}
```

## 参数

- `values` (Array): 数组
- `keyFld` (String): key字段
- `partNum` (Number): 等分数

## 返回值

- Object: 分组后的数据
  - `returns.nums` (Array): 每组的数量
  - `returns.vals` (Array): 分组的值界限
  - `returns.items` (Array): 每组的原数据对象序列

## 描述

根据指定的key字段，将数据等间距分组，并返回分组信息。

## 示例

```javascript
const result = cx.util.equalValGap(values, 'key', 3);
console.log('分组结果:', result);
```

## 注意事项

- 此方法为静态方法，可以直接调用 