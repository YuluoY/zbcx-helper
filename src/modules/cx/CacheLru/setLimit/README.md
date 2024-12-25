# setLimit

设置最大缓存数量。

## 语法

```javascript
setLimit(limit)
```

## 参数

| 参数名 | 类型 | 是否可选 | 描述 |
|--------|------|----------|------|
| limit | Number | 否 | 最大门限值 |

## 返回值

| 类型 | 描述 |
|------|------|
| Object | 返回 this 对象,支持链式调用 |

## 描述

`setLimit` 方法用于动态设置缓存的最大容量。当设置新的限制值时:

1. 如果新的限制值小于当前缓存项数量,会自动移除多余的最久未使用项,直到缓存项数量符合新的限制
2. 如果新的限制值大于当前缓存项数量,则不会发生任何移除操作
3. 被移除的项会触发 `onRemove` 回调函数(如果设置了的话)

这个方法允许在运行时动态调整缓存的容量,适用于需要根据实际情况调整缓存大小的场景。

## 示例

```javascript
const cache = new cx.CacheLru({
    limit: 3,
    onRemove: (value) => {
        console.log('缓存项被移除:', value);
    }
});

// 添加缓存数据
cache.put('key1', 'value1');
cache.put('key2', 'value2');
cache.put('key3', 'value3');

// 减小缓存限制,会触发移除
cache.setLimit(2); // 最久未使用的项将被移除

// 增大缓存限制
cache.setLimit(5); // 不会触发任何移除操作

// 可以链式调用
cache.setLimit(4).put('key4', 'value4');
``` 