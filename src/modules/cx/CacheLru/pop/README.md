# pop

根据键值弹出对象(删除数据但不调用删除销毁函数)。

## 语法

```javascript
pop(key)
```

## 参数

| 参数名 | 类型 | 是否可选 | 描述 |
|--------|------|----------|------|
| key | String | 否 | 键值 |

## 返回值

| 类型 | 描述 |
|------|------|
| Object | 返回 key 对应的对象 |

## 描述

`pop` 方法用于从缓存中移除并返回指定键值对应的数据。与 `remove` 方法不同的是,`pop` 方法不会触发 `onRemove` 回调函数。

这个方法通常用于需要获取并同时删除缓存项,但不需要执行清理操作的场景。

## 示例

```javascript
const cache = new cx.CacheLru({
    onRemove: (value) => {
        console.log('缓存项被移除:', value);
    }
});

// 添加缓存数据
cache.put('key1', 'value1');

// 弹出缓存项
const value = cache.pop('key1'); // 返回 'value1',但不会触发 onRemove 回调

console.log(value); // 'value1'
console.log(cache.get('key1')); // undefined
``` 