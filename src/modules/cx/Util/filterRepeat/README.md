# filterRepeat

数组中值去重。

## 语法

```javascript
filterRepeat(list) → {Array.<(String|Number)>}
```

## 参数

- `list` (Array.<(String|Number)>): 字符数组

## 返回值

- Array.<(String|Number)>: 去重后的数组

## 描述

从数组中去除重复的值。

## 示例

```javascript
const uniqueList = cx.util.filterRepeat(['a', 'b', 'a']);
console.log('去重数组:', uniqueList);
```

## 注意事项

- 此方法为静态方法，可以直接调用
- 已弃用，使用`cx.array.derepeat`下的接口 