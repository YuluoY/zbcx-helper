# memOfGroup

取指定组(1个或者多个)里面的所有成员

## 方法签名
```typescript
static memOfGroup(no: string, cacheKey?: string) => Promise
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| no | String | 是 | 组编码(多个之间用;分隔) |
| cacheKey | String | 否 | 缓存键 |

## 返回值
Promise 对象，包含组成员信息。

## 功能描述
获取指定组中的所有成员信息。

## 示例
```typescript
const members = await cx.svr.auth.memOfGroup('group1;group2');
console.log(members);
``` 