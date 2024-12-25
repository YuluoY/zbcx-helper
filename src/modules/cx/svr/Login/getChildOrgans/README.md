# getChildOrgans

免登陆服务 - 获取子部门信息

## 方法签名
```typescript
static getChildOrgans(pOrganId?: Number) => Promise
```

## 参数说明
- `pOrganId` (Number, optional): 父部门id，默认值为0，默认获取根部门

## 返回值
Promise 对象，返回数据结构 {ret:0, data: []}

## 功能描述
免登陆服务 - 获取子部门信息。

## 示例
```typescript
await cx.svr.login.getChildOrgans(1); // 获取ID为1的部门的子部门
await cx.svr.login.getChildOrgans(); // 获取根部门
``` 