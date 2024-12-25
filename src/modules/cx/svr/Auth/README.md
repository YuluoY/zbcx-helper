# auth

授权服务类

## 类名
cx.svr.auth

## 功能说明
提供对授权信息的管理和操作服务，包括缓存、角色管理、权限获取等功能。

## 方法列表
| 方法名 | 说明 | 文档链接 |
|--------|------|----------|
| cache | 缓存对象 | [查看详情](./cache/README.md) |
| allAuthEtt | 取全部表达式授权信息 | [查看详情](./allAuthEtt/README.md) |
| allAuthExp | 取全部表达式授权信息 | [查看详情](./allAuthExp/README.md) |
| delRoleObj | 删除角色权限类型为当前type的旧数据 | [查看详情](./delRoleObj/README.md) |
| delUserRole | 删除系统号为sys的用户被赋予的角色 | [查看详情](./delUserRole/README.md) |
| getCache | 取缓存数据 | [查看详情](./getCache/README.md) |
| memOfGroup | 取指定组(1个或者多个)里面的所有成员 | [查看详情](./memOfGroup/README.md) |
| putCache | 缓存数据 | [查看详情](./putCache/README.md) |
| url | 取服务对应的网址 | [查看详情](./url/README.md) |

## 使用示例
```typescript
// 获取缓存对象
const cache = cx.svr.auth.cache;

// 获取全部授权信息
const authInfo = await cx.svr.auth.allAuthEtt();

// 删除角色对象
await cx.svr.auth.delRoleObj('role123', 'admin', 'sys1');

// 获取服务网址
const serviceUrl = cx.svr.auth.url();
``` 