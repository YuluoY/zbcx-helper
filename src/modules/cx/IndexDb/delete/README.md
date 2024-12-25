# delete

删除数据。

## 基本信息

- 功能说明：删除数据库中的单条数据记录
- 所属类：cx.IndexDb
- 类实例化：需要通过 new 操作符创建实例

## 参数说明

options: Object - 参数对象
- name: String - 表名，默认使用 defStoreName（可选）
- key: String - 缓存标识

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

// 删除单条数据
try {
    await db.delete({
        name: 'storeName',
        key: 'key1'
    });
    console.log('数据删除成功');
} catch (error) {
    console.error('数据删除失败:', error);
}

// 使用默认表名删除数据
try {
    await db.delete({
        key: 'key2'
    });
    console.log('默认表数据删除成功');
} catch (error) {
    console.error('默认表数据删除失败:', error);
}
```

## 注意事项

- 如果未指定 name，将使用默认的 defStoreName
- 删除对象必须包含主键（key）字段
- 如果数据的主键不存在，删除会失败
- 删除操作是异步的，需要使用 await 等待操作完成
- 建议在删除前先确认数据的主键是否存在 