# getCache

获取缓存数据。

## 语法

```javascript
static getCache(cacheKey, conf?) → {Promise}
```

## 参数

- cacheKey: String - 缓存标识
- conf?: Object - 配置对象
  - major?: Number - 主类型
  - minor?: Number - 主类型
  - isMemory?: Boolean - 是否缓存到内存，否则持久化缓存

## 返回值

- Promise - 返回缓存的数据

## 示例

```javascript
// 获取基本缓存
const data = await cx.service.getCache('myCacheKey');
console.log('缓存数据:', data);

// 获取带配置的缓存
const config = {
  major: 1,
  minor: 2,
  isMemory: true
};
const memoryData = await cx.service.getCache('myCacheKey', config);
console.log('内存缓存数据:', memoryData);
```

## 注意事项

- 直接通过 cx.service.getCache 调用
- 返回Promise对象，需要使用await或then获取数据
- 可以通过配置对象指定缓存的存储方式和类型
- isMemory为true时使用内存缓存，否则使用持久化缓存 