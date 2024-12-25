# stat

统计(支持按照数组统计，或者按照分组的结果进行统计)。

## 语法

```javascript
stat(data, colname, type) → {Object}
```

## 参数

- `data` (Array | Object): 待统计数据（数组 / 对象 - 分组结果）
- `colname` (String): 统计列列名
- `type` (Number): 统计方式 (cx.consts.STAT_***)

## 返回值

- Object: 数据统计返回 - `{ stat: *** }`, 对象 (分组结果) - 按照分组的对象结构增加 stat 存放统计结果

## 描述

统计数据，支持多种统计方式。

## 示例

```javascript
const result = cx.util.stat(data, 'column', cx.consts.STAT_SUM);
console.log('统计结果:', result);
```

## 注意事项

- 此方法为静态方法，可以直接调用 