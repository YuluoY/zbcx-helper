# dels

批量删除数据。

## 基本信息

- 功能说明：批量删除数据库中的数据记录
- 所属类：cx.IndexDb
- 类实例化：需要通过 new 操作符创建实例

## 参数说明

options: Object - 参数对象
- name: String - 表名，默认使用 defStoreName（可选）
- keys: Array<String> - 缓存标识集合，比如 [1,2,3]

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

// 批量删除数据
try {
    await db.dels({
        name: 'storeName',
        keys: ['key1', 'key2', 'key3']
    });
    console.log('数据批量删除成功');
} catch (error) {
    console.error('数据批量删除失败:', error);
}

// 使用默认表名批量删除数据
try {
    await db.dels({
        keys: ['key4', 'key5']
    });
    console.log('默认表数据批量删除成功');
} catch (error) {
    console.error('默认表数据批量删除失败:', error);
}
```

## 注意事项

- 如果未指定 name，将使用默认的 defStoreName
- 每个删除对象必须包含主键（key）字段
- 如果某条数据的主键不存在，该条数据的删除会失败
- 批量删除操作会在一个事务中完成，保证数据的一致性
- 如果批量删除过程中出现错误，会回滚所有删除操作
- 删除操作是异步的，需要使用 await 等待操作完成
- 建议在批量删除前先确认所有数据的主键是否存在 