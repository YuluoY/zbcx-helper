# cache

缓存对象

## 属性类型
`cx.CacheLru`

## 功能描述
提供缓存功能，使用 LRU 算法管理缓存数据。

## 示例
```typescript
const cache = cx.svr.auth.cache;
// 使用缓存对象
cache.set('key', 'value');
const value = cache.get('key');
``` 