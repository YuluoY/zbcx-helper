# delRoleObj

删除角色权限类型为当前type的旧数据

## 方法签名
```typescript
static delRoleObj(roleid: string, type: string, sys: string) => Promise
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| roleid | String | 是 | 角色id |
| type | String | 是 | 角色户的类型 |
| sys | String | 是 | 角色系统号 |

## 返回值
Promise 对象

## 功能描述
删除指定角色的旧权限数据。

## 示例
```typescript
await cx.svr.auth.delRoleObj('role123', 'admin', 'sys1');
``` 