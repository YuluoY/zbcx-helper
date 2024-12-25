# defStoreKeyPath

默认键值，使用取值函数（getter）设置默认的键值属性 defStoreKeyPath。

## 基本信息

- 功能说明：获取默认的存储对象主键字段名
- 所属类：cx.IndexDb
- 类实例化：需要通过 new 操作符创建实例

## 参数说明

此方法不需要参数。

## 返回值

- String - 返回默认的主键字段名

## 使用示例

```javascript
// 创建数据库实例
const db = new cx.IndexDb({
    dbName: 'myDatabase',
    dbVersion: '1.0'
});

// 获取默认主键字段名
const defaultKeyPath = db.defStoreKeyPath;
console.log('默认主键字段名:', defaultKeyPath);  // 通常返回 'key'

// 在创建存储对象时使用默认主键字段名
try {
    const storeConfig = {
        name: 'users',
        conf: {
            keyPath: db.defStoreKeyPath,  // 使用默认主键字段名
            autoIncrement: false
        }
    };
    await db.createStores(storeConfig);
    console.log('存储对象创建成功');
} catch (error) {
    console.error('存储对象创建失败:', error);
}
```

## 注意事项

- 这是一个 getter 属性，��是方法，使用时不需要加括号
- 默认主键字段名通常为 'key'
- 此属性值在实例化时已确定，不可修改
- 建议在创建存储对象时使用此属性来保持主键字段名的一致性
- 如果需要使用自定义的主键字段名，可以在创建存储对象时直接指定 keyPath
``` 
</rewritten_file>