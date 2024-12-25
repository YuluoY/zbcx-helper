# put

增加键值对。

## 语法

```javascript
put(key, value)
```

## 参数

| 参数名 | 类型 | 是否可选 | 描述 |
|--------|------|----------|------|
| key | String | 否 | 键值 |
| value | Object | 否 | 对象 |

## 返回值

| 类型 | 描述 |
|------|------|
| Object | 被删除的对象(如果有的话) |

## 描述

`put` 方法用于向缓存中添加新的键值对。如果添加新项导致缓存超出限制,则会自动移除最久未使用的项。

当添加一个已存在的键时,原有的值会被新值替换,并且该项会被标记为最近使用。

如果缓存达到容量上限,在添加新项之前会先移除最久未使用的项,并触发 `onRemove` 回调函数(如果设置了的话)。

## 示例

```javascript
const cache = new cx.CacheLru({
    limit: 2,
    onRemove: (value) => {
        console.log('缓存项被移除:', value);
    }
});

// 添加缓存数据
cache.put('key1', 'value1');
cache.put('key2', 'value2');

// 添加第三项时会触发 LRU 淘汰
const removed = cache.put('key3', 'value3'); // 会移除 'key1' 的值

console.log(removed); // 'value1'
console.log(cache.get('key1')); // undefined
console.log(cache.get('key2')); // 'value2'
console.log(cache.get('key3')); // 'value3'

// 更新已存在的值
cache.put('key2', 'new-value2');
console.log(cache.get('key2')); // 'new-value2'
``` 