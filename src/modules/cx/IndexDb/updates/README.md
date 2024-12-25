# updates

批量更新数据。

## 基本信息

- 功能说明：批量更新数据库中的数据记录
- 所属类：cx.IndexDb
- 类实例化：需要通过 new 操作符创建实例

## 参数说明

options: Object - 参数对象
- name: String - 表名，默认使用 defStoreName（可选）
- datas: Array<Object> - 待更新的数据对象序列，结构与 update 中 data 一致

## 返回值

- Promise - 异步操作的 Promise 对象
  - resolve: 更新成功
  - reject: 更新失败，返回错误信息

## 使用示例

```javascript
// 创建数据库实例
const db = new cx.IndexDb({
    dbName: 'myDatabase',
    dbVersion: '1.0'
});

// 批量更新数据
try {
    const updateData = [
        { key: 'key1', value: 'newValue1' },
        { key: 'key2', value: 'newValue2' },
        { key: 'key3', value: 'newValue3' }
    ];

    await db.updates({
        name: 'storeName',
        datas: updateData
    });
    console.log('数据批量更新成功');
} catch (error) {
    console.error('数据批量更新失败:', error);
}

// 使用默认表名更新数据
try {
    const updateData = [
        { key: 'key1', value: 'updatedValue1' },
        { key: 'key2', value: 'updatedValue2' }
    ];

    await db.updates({
        datas: updateData
    });
    console.log('默认表数据批量更新成功');
} catch (error) {
    console.error('默认表数据批量更新失败:', error);
}
```

## 注意事项

- 如果未指定 name，将使用默认的 defStoreName
- 每个更新对象必须包含主键（key）字段
- 如果某条数据的主键不存在，该条数据的更新会失败
- 批量更新操作会在一个事务中完成，保证数据的一致性
- 如果批量更新过程中出现错误，会回滚所有更新操作
- 更新操作是异步的，需要使用 await 等待操作完成
- 建议在批量更新前先确认所有数据的主键是否存在 