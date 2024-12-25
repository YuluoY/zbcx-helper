# delUserRole

删除系统号为sys的用户被赋予的角色

## 方法签名
```typescript
static delUserRole(userid: int, sys: int) => Promise
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| userid | int | 是 | 用户id |
| sys | int | 是 | 系统号 |

## 返回值
Promise 对象

## 功能描述
删除指定用户在特定系统中的角色。

## 示例
```typescript
await cx.svr.auth.delUserRole(123, 1);
``` 