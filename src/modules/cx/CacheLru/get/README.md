# get

根据键值获取对象。

## 语法

```javascript
get(key, returnEntry)
```

## 参数

| 参数名 | 类型 | 是否可选 | 描述 |
|--------|------|----------|------|
| key | String | 否 | 键值 |
| returnEntry | Boolean | 否 | 是否返回键值对 |

## 返回值

| 类型 | 描述 |
|------|------|
| Object | 返回 key 对应的对象,或者是 {key, value} 对 |

## 描述

`get` 方法用于从缓存中获取指定键值对应的数据。如果 `returnEntry` 为 true,则返回包含键和值的对象,否则只返回值。

当访问某个键值对应的数据时,该数据会被标记为最近使用,这会影响 LRU 缓存的淘汰策略。

## 示例

```javascript
const cache = new cx.CacheLru();

// 添加缓存数据
cache.put('key1', 'value1');

// 获取值
console.log(cache.get('key1', false)); // 'value1'

// 获取键值对
console.log(cache.get('key1', true)); // { key: 'key1', value: 'value1' }

// 获取不存在的键
console.log(cache.get('nonexistent')); // undefined
``` 