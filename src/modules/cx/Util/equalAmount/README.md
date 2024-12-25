# equalAmount

等数量分组，返回每组成员数量的数组。

## 语法

```javascript
equalAmount(itemNum, grpNum) → {Array}
```

## 参数

- `itemNum` (Number): 目标对象的个数
- `grpNum` (Number): 分成num组

## 返回值

- Array: 分组数组，每个值是该组中元素的个数

## 描述

将目标对象等数量分组，并返回每组的成员数量。

## 示例

```javascript
const groups = cx.util.equalAmount(10, 3);
console.log('分组:', groups);
```

## 注意事项

- 此方法为静态方法，可以直接调用 