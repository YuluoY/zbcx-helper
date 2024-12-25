# filterRepeatObjByKeys

对象数组去重。

## 语法

```javascript
filterRepeatObjByKeys(list, keys) → {Array.<Object>}
```

## 参数

- `list` (Array.<Object>): 字符数组
- `keys` (Array.<String>): 属性字段集合，也是判断重复的组合标识

## 返回值

- Array.<Object>: 去重后的数组

## 描述

从对象数组中去除重复的对象，基于多个属性字段。

## 示例

```javascript
const uniqueObjects = cx.util.filterRepeatObjByKeys(objects, ['name', 'age']);
console.log('去重对象:', uniqueObjects);
```

## 注意事项

- 此方法为静态方法，可以直接调用
- 已弃用，使用`cx.array.derepeatByKeys`接口 