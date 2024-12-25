# putCache

缓存数据

## 方法签名
```typescript
static putCache(cmd: string, cacheKey: string, data: Object) => Object
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| cmd | String | 是 | 命令 |
| cacheKey | String | 是 | 缓存键 |
| data | Object | 是 | 待缓存的数据 |

## 返回值
缓存后的数据对象。

## 功能描述
将数据缓存到指定的缓存键中。

## 示例
```typescript
const result = cx.svr.auth.putCache('store', 'user123', { name: 'John' });
console.log(result);
``` 