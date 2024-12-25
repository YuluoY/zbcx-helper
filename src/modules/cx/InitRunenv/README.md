# InitRunenv

`InitRunenv` 类提供了一组静态方法，用于初始化和管理运行环境。

## 使用方法

无需实例化，直接调用静态方法。

```javascript
// 示例调用
cx.InitRunenv.doParsedData(data);
```

## 方法列表

### doParsedData
对解析后的数据进行预处理。

### getInitSys
获取初始化的系统号。

### getLoginAuth
获取登录后的用户认证信息。

### init
初始化运行环境。

### init$g
根据数据构造 $g 对象。

### parseData
解析系统初始化服务返回的数据。

### setInitSys
保存初始化的系统号。

### setLoginAuth
清除或保存登录后的用户认证信息。

### updCacheByDbVersion
根据数据库的版本更新本地缓存。

## 注意事项

- 所有方法均为静态方法，不需要实例化。
- 确保传入的参数正确，以避免运行时错误。
- 详细的使用说明和示例请参考各个方法的文档。 