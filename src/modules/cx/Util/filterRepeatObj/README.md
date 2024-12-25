# filterRepeatObj

对象数组去重。

## 语法

```javascript
filterRepeatObj(list, key) → {Array.<Object>}
```

## 参数

- `list` (Array.<Object>): 字符数组
- `key` (String): 要根据哪个属性进行去重，默认为`id`

## 返回值

- Array.<Object>: 去重后的数组

## 描述

从对象数组中去除重复的对象。

## 示例

```javascript
const uniqueObjects = cx.util.filterRepeatObj(objects, 'name');
console.log('去重对象:', uniqueObjects);
```

## 注意事项

- 此方法为静态方法，可以直接调用
- 已弃用，使用`cx.array.derepeatByKey`下的接口 