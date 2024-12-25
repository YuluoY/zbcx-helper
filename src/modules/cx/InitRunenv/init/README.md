# init

初始化运行环境。

## 基本信息

- 功能说明：初始化运行环境
- 所属类：cx.InitRunenv
- 静态方法：不需要实例化

## 参数说明

- sys: Number - 系统号
- options: Object - 参数对象
  - authorization: String - 用户登录后的许可
  - access: cx.IAccess - 权限处理对象（可选）
  - codeFactory: cx.CodeFactory - codeFactory实例对象，默认使用内置对象（可选）
  - attClass: String - 属性类对照表（可选）
  - appDbName: String - 前端缓存数据库名（可选）

## 返回值

- Promise - 异步操作的 Promise 对象
  - resolve: 初始化成功
  - reject: 初始化失败，返回错误信息

## 使用示例

```javascript
// 初始化运行环境
const sysId = 123;
const options = {
    authorization: 'authToken',
    access: new cx.IAccess(),
    codeFactory: new cx.CodeFactory(),
    attClass: 'attributeClass',
    appDbName: 'appDatabase'
};

try {
    await cx.InitRunenv.init(sysId, options);
    console.log('运行环境初始化成功');
} catch (error) {
    console.error('运行环境初始化失败:', error);
}
```

## 注意事项

- 确保传入的系统号和选项参数正确
- 初始化操作是异步的，需要使用 await 等待操作完成
- 初始化成功后，可以进行后续的业务操作
- 如果初始化失败，请检查参数配置和网络连接 