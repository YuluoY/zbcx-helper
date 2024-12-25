# getCache

取缓存数据

## 方法签名
```typescript
static getCache(cmd: string, cacheKey: string) => Promise
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| cmd | String | 是 | 命令 |
| cacheKey | String | 是 | 缓存键 |

## 返回值
Promise 对象，包含缓存数据。

## 功能描述
根据命令和缓存键获取缓存中的数据。

## 示例
```typescript
const data = await cx.svr.auth.getCache('fetch', 'user123');
console.log(data);
``` 