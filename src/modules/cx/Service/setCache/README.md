# setCache

添加缓存数据。

## 语法

```javascript
static setCache(cacheKey, data, conf?)
```

## 参数

- cacheKey: String - 缓存标识
- data: * - 缓存数据
- conf?: Object - 配置对象
  - major?: Number - 主类型
  - minor?: Number - 主类型
  - isMemory?: Boolean - 是否缓存到内存，否则持久化缓存

## 返回值

无

## 示例

```javascript
// 基本缓存设置
cx.service.setCache('myCacheKey', { id: 1, name: 'test' });

// 设置内存缓存
const config = {
  major: 1,
  minor: 2,
  isMemory: true
};
cx.service.setCache('myCacheKey', { data: 'memory-data' }, config);
```

## 注意事项

- 直接通过 cx.service.setCache 调用
- 可以缓存任意类型的数据
- 通过配置对象可以指定缓存的存储方式
- isMemory为true时使用内存缓存，否则使用持久化缓存 