# Service

`cx.service` 类 - 服务包装类。提供了一系列用于管理服务调用和缓存的静态方法。

## 静态方法

### add
增加URL。

### delCache
删除缓存数据。

### delsCache
根据表主子类型批量删除缓存数据。

### execute
执行后台服务。

### formatRet
格式化服务返回数据对象。

### getCache
获取缓存数据。

### makeCacheKey
构造数据缓存的key。

### setCache
添加缓存数据。

### url
根据Key取对应的服务URL。

## 使用示例

```javascript
// 添加服务URL
cx.service.add('myService', '/api/myService');

// 执行服务
cx.service.execute('/api/myService', 'getData', { id: 123 })
  .then(ret => {
    console.log('服务返回数据:', ret);
  });

// 缓存操作
const key = cx.service.makeCacheKey('myCache', 1, 2);
cx.service.setCache(key, { data: 'cached' });
const data = await cx.service.getCache(key);
cx.service.delCache(key);
```

## 注意事项

- 所有方法都是静态方法，通过 `cx.service` 直接调用
- 提供完整的服务调用和缓存管理功能
- 支持服务返回数据的格式化处��� 