# getLoginAuth

获取登录后的用户认证。

## 基本信息

- 功能说明：获取登录后的用户认证信息
- 所属类：cx.InitRunenv
- 静态方法：不需要实例化

## 参数说明

此方法不需要参数。

## 返回值

- Object - 返回认证字符串，有值时结构 {authorization: , user: }；未登录时返回空对象

## 使用示例

```javascript
// 获取用户认证信息
const authInfo = cx.InitRunenv.getLoginAuth();
console.log('用户认证信息:', authInfo);
```

## 注意事项

- 如果用户未登录，返回空对象
- 该方法用于获取当前用户的认证状态
- 认证信息可以用于访问控制和权限验证 