# getMyOrgPos

取操作人员的部门和职务。

## 语法

```javascript
static getMyOrgPos()
```

## 参数

无

## 返回值

| 类型 | 描述 |
|------|------|
| Promise | 返回一个 Promise 对象，解析为操作人员的部门和职务信息 |

## 描述

`getMyOrgPos` 方法用于获取当前操作人员的部门和职务信息。它会:

1. 获取当前登录用户信息
2. 查询用户所属的部门信息
3. 查询用户在部门中的职务信息

这个方法常用于:
- 获取用户组织架构信息
- 权限控制
- 数据过滤
- 业务流程处理

## 示例

```javascript
// 获取当前用户的部门和职务信息
cx.data.getMyOrgPos()
  .then(info => {
    console.log('部门:', info.organ);
    console.log('职务:', info.position);
  })
  .catch(err => {
    console.error('获取部门职务信息失败:', err);
  });
``` 