# partEqual

根据values中keyFld对于的最大最小值和分组数量，构造等间距的数值序列。

## 语法

```javascript
partEqual(values, keyFld, partNum) → {Array.<Number>}
```

## 参数

- `values` (Array): 数组
- `keyFld` (String): key字段
- `partNum` (Number): 等分数

## 返回值

- Array.<Number>: 等间距的数值序列

## 描述

根据指定的key字段和分组数量，生成等间距的数值序列。

## 示例

```javascript
const intervals = cx.util.partEqual(values, 'key', 5);
console.log('等间距序列:', intervals);
```

## 注意事项

- 此方法为静态方法，可以直接调用 