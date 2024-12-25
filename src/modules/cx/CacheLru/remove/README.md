# remove

移除最久未用对象。

## 语法

```javascript
remove()
```

## 返回值

| 类型 | 描述 |
|------|------|
| Object | 返回 this 对象,支持链式调用 |

## 描述

`remove` 方法用于从缓存中移除最久未使用的项。这是 LRU (最近最少使用) 缓存算法的核心操作之一。

当调用此方法时:
1. 会找到缓存中最久未被访问的项
2. 将其从缓存中移除
3. 如果设置了 `onRemove` 回调函数,则会调用该函数并传入被移除的值

这个方法通常在缓存达到容量上限需要腾出空间时自动调用,但也可以手动调用以主动清理最旧的缓存项。

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

// 访问 key2,使其成为最近使用的项
cache.get('key2');

// 手动移除最久未用的项
cache.remove(); // 将移除 key1 或 key3 (取决于它们的访问顺序)

// 可以链式调用
cache.remove().remove(); // 连续移除两个最久未用的项
``` 