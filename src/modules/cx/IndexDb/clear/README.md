# clear

清空表数据。

## 基本信息

- 功能说明：清空指定存储对象中的所有数据
- 所属类：cx.IndexDb
- 类实例化：需要通过 new 操作符创建实例

## 参数说明

- name: String - 表名，默认使用 defStoreName（可选）

## 返回值

- Promise - 异步操作的 Promise 对象
  - resolve: 清空操作成功
  - reject: 清空操作失败，返回错误信息

## 使用示例

```javascript
// 创建数据库实例
const db = new cx.IndexDb({
    dbName: 'myDatabase',
    dbVersion: '1.0'
});

// 方式一：清空指定表的数据
try {
    await db.clear('storeName');
    console.log('数据清空成功');
} catch (error) {
    console.error('数据清空失败:', error);
}

// 方式二：清空默认表的数据
try {
    await db.clear();  // 使用默认的 defStoreName
    console.log('默认表数据清空成功');
} catch (error) {
    console.error('默认表数据清空失败:', error);
}
```

## 注意事项

- 此操作会清空指定存储对象中的所有数据，请谨慎使用
- 如果未指定 name，将使用默认的 defStoreName
- 清空操作不会删除存储对象本身，只会删除其中的数据
- 清空操作是不可逆的，请确保在操作前已经做好数据备份
- 清空操作会在一个事务中完成，保证数据的一致性
- 清空操作是异步的，需要使用 await 等待操作完成
- 如果指定的存储对象不存在，会抛出错误