# setLoginAuth

清除 或 保存登录后的用户认证。

## 基本信息

- 功能说明：清除或保存登录后的用户认证信息
- 所属类：cx.InitRunenv
- 静态方法：不需要实例化

## 参数说明

- loginAuth: Object - 登录成功的认证对象，不传时移除登录状态（可选）
  - authorization: String - 认证字符串
  - user: Object - 用户数据对象
- time: Number - 有效时长，单位分钟（可选，默认值为 0）

## 返回值

无返回值。

## 使用示例

```javascript
// 保存用户认证信息
const authInfo = {
    authorization: 'authToken',
    user: { id: 1, name: 'John Doe' }
};
cx.InitRunenv.setLoginAuth(authInfo, 120);
console.log('用户认证信息已保存');

// 清除用户认证信息
cx.InitRunenv.setLoginAuth();
console.log('用户认证信息已清除');
```

## 注意事项

- 确保传入的认证信息正确
- 有效时长为可选参数，默认值为 0 表示永久有效
- 该方法用于设置或清除用户的认证状态
- 如果需要临时认证状态，可以设置有效时长
  </rewritten_file> 