# delsCache

根据表主子类型批量删除缓存数据。

## 语法

```javascript
static async delsCache(major?, minor?)
```

## 参数

- major?: Number - 主类型
- minor?: Number - 主类型

## 返回值

无

## 示例

```javascript
// 删除指定主子类型的所有缓存
await cx.service.delsCache(1, 2);

// 只删除指定主类型的缓存
await cx.service.delsCache(1);

// 删除所有缓存
await cx.service.delsCache();
```

## 注意事项

- 直接通过 cx.service.delsCache 调用
- 用于批量删除符合条件的缓存数据
- 是异步方法，需要使用 await 等待执行完成
- 如果不指定参数则删除所有缓存 