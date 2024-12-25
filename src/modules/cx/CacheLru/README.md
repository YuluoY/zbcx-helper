# CacheLru

CacheLru 是一个实现了 LRU (最近最少使用) 缓存算法的类,继承自 ICache 接口。它提供了一种高效的缓存机制,可以在达到缓存上限时自动移除最久未使用的项目。

## 构造函数参数

| 参数名 | 类型 | 是否可选 | 默认值 | 描述 |
|--------|------|----------|---------|------|
| options | Object | 是 | {} | 配置参数对象 |
| options.limit | Number | 是 | - | 缓存限制数量 |
| options.onRemove | Function | 是 | - | 淘汰时的回调函数,参数为被淘汰的值 |

## 方法

| 方法名 | 描述 |
|--------|------|
| [clear](clear) | 清除缓存数据 |
| [get](get) | 根据键值获取对象 |
| [pop](pop) | 根据键值弹出对象(删除数据但不调用删除销毁函数) |
| [put](put) | 增加键值对 |
| [remove](remove) | 移除最久未用对象 |
| [setLimit](setLimit) | 设置最大缓存数量 |

## 示例

```javascript
// 创建一个最大容量为 100 的缓存实例
const cache = new cx.CacheLru({
    limit: 100,
    onRemove: (value) => {
        console.log('缓存项被移除:', value);
    }
});

// 添加缓存项
cache.put('key1', 'value1');
cache.put('key2', 'value2');

// 获取缓存项
const value = cache.get('key1');

// 设置新的缓存限制
cache.setLimit(200);

// 清除所有缓存
cache.clear();
``` 