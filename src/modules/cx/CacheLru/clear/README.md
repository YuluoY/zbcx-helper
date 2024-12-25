# clear

清除缓存数据。

## 语法

```javascript
clear()
```

## 返回值

| 类型 | 描述 |
|------|------|
| Object | 返回 this 对象,支持链式调用 |

## 描述

`clear` 方法用于清除缓存中的所有数据。调用此方法后,缓存将被完全清空。

## 示例

```javascript
const cache = new cx.CacheLru();

// 添加一些缓存数据
cache.put('key1', 'value1');
cache.put('key2', 'value2');

// 清除所有缓存数据
cache.clear();

// 此时缓存为空
console.log(cache.get('key1')); // undefined
console.log(cache.get('key2')); // undefined
``` 