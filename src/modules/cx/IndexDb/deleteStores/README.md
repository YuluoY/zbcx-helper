# deleteStores

删除数据表。

## 基本信息

- 功能说明：删除指定的一个或多个存储对象
- 所属类：cx.IndexDb
- 类实例化：需要通过 new 操作符创建实例

## 参数说明

- names: Array<String> - 数据表定义对象，要删除的表名数组

## 返回值

- Promise - 异步操作的 Promise 对象
  - resolve: 删除成功
  - reject: 删除失败，返回错误信息

## 使用示例

```javascript
// 创建数据库实例
const db = new cx.IndexDb({
    dbName: 'myDatabase',
    dbVersion: '1.0'
});

// 删除单个存储对象
try {
    await db.deleteStores(['storeName']);
    console.log('存储对象删除成功');
} catch (error) {
    console.error('存储对象删除失败:', error);
}

// 删除多个存储对象
try {
    await db.deleteStores(['store1', 'store2', 'store3']);
    console.log('多个存储对象删除成功');
} catch (error) {
    console.error('存储对象删除失败:', error);
}
```

## 注意事项

- 删除存储对象会同时删除其中的所有数据，此操作不可逆，请谨慎使用
- 删除操作需要在数据库版本��新事件中进行
- 删除后如需重新使用，需要重新创建存储对象
- 如果指定的存储对象不存在，会抛出错误
- 删除操作是异步的，需要使用 await 等待操作完成
- 建议在删除前备份重要数据
  </rewritten_file> 