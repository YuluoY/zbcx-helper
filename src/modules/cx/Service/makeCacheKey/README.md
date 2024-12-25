# makeCacheKey

构造数据缓存的key。

## 语法

```javascript
static makeCacheKey(cacheKey, major?, minor?) → {String}
```

## 参数

- cacheKey: String - 缓存键
- major?: Number|null - 目标表主类型
- minor?: Number|null - 目标表子类型

## 返回值

- String - 构造的缓存标识字符串

## 示例

```javascript
// 基本缓存键
const key1 = cx.service.makeCacheKey('myCache');
console.log('基本缓存键:', key1);

// 带主类型的缓存键
const key2 = cx.service.makeCacheKey('myCache', 1);
console.log('带主类型的缓存键:', key2);

// 带主子类型的缓存键
const key3 = cx.service.makeCacheKey('myCache', 1, 2);
console.log('带主子类型的缓存键:', key3);
```

## 注意事项

- 直接通过 cx.service.makeCacheKey 调用
- 用于生成标准格式的缓存键
- 主子类型参数可选，用于细分缓存类型 