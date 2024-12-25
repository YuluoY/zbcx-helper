# delCache

删除缓存数据。

## 语法

```javascript
static delCache(cacheKey, conf?)
```

## 参数

- cacheKey: String - 缓存标识
- conf?: Object - 配置对象
  - major?: Number - 主类型
  - minor?: Number - 主类型

## 返回值

无

## 示例

```javascript
// 删除指定缓存
cx.service.delCache('myCacheKey');

// 删除带配置的缓存
cx.service.delCache('myCacheKey', {
  major: 1,
  minor: 2
});
```

## 注意事项

- 直接通过 cx.service.delCache 调用
- 用于删除指定标识的缓存数据
- 可以通过配置对象指定主子类型 