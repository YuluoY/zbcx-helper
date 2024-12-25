# update

更新数据。

## 基本信息

- 功能说明：更新数据库中的单条数据记录
- 所属类：cx.IndexDb
- 类实例化：需要通过 new 操作符创建实例

## 参数说明

options: Object - 参数对象
- name: String - 表名，默认使用 defStoreName（可选）
- data: Object - 待更新的数据对象
  - key: String - 缓存唯一标识
  - value: * - 缓存的值

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

// 更新单条数据
try {
    const updateData = {
        key: 'key1',
        value: 'newValue1'
    };

    await db.update({
        name: 'storeName',
        data: updateData
    });
    console.log('数据更新成功');
} catch (error) {
    console.error('数据更新失败:', error);
}

// 使用默认表名更新数据
try {
    const updateData = {
        key: 'key2',
        value: 'updatedValue2'
    };

    await db.update({
        data: updateData
    });
    console.log('默认表数据更新成功');
} catch (error) {
    console.error('默认表数据更新失败:', error);
}
```

## 注意事项

- 如果未指定 name，将使用默认的 defStoreName
- 更新对象必须包含主键（key）字段
- 如果数据的主键不存在，更新会失败
- 更新操作是异步的，需要使用 await 等待操作完成
- 建议在更新前先确认数据的主键是否存在 