# createDb

新建数据库。

## 基本信息

- 功能说明：创建一个新的 IndexedDB 数据库
- 所属类：cx.IndexDb
- 类实例化：需要通过 new 操作符创建实例

## 参数说明

此方法不需要参数。

## 返回值

- Promise - 异步操作的 Promise 对象
  - resolve: 创建成功
  - reject: 创建失败，返回错误信息

## 使用示例

```javascript
// 创建数据库实例
const db = new cx.IndexDb({
    dbName: 'myDatabase',
    dbVersion: '1.0'
});

// 创建数据库
try {
    await db.createDb();
    console.log('数据库创建成功');
} catch (error) {
    console.error('数据库创建失败:', error);
}

// 创建数据库并初始化存储对象
try {
    // 先创建数据库
    await db.createDb();
    
    // 然后创建存储对象
    const storeConfig = {
        name: 'users',
        conf: {
            keyPath: 'id',
            autoIncrement: true
        },
        indexs: [
            {
                name: 'nameIndex',
                conf: { unique: false }
            }
        ]
    };
    await db.createStores(storeConfig);
    
    console.log('数据库和存储对象创建成功');
} catch (error) {
    console.error('创建失败:', error);
}
```

## 注意事项

- 创建数据库时会使用实例化时指定的数据库名称和版本号
- 如果数据库已存在且版本号相同，则会直接打开数据库
- 如果数据库已存在但版本号更高，会触发数据库升级事件
- 创建操作是异步的，需要使用 await 等待操作完成
- 建议在创建数据库后立即创建所需的存储对象
- 数据库创建后可以通过其他方法添加或修改存储对象 