# getStoreKeyPath

获取表的主键字段名。

## 基本信息

- 功能说明：获取指定存储对象的主键字段名
- 所属类：cx.IndexDb
- 类实例化：需要通过 new 操作符创建实例

## 参数说明

- name: String - 表名，默认使用 defStoreName（可选）

## 返回值

- String - 该表的主键字段名

## 使用示例

```javascript
// 创建数据库实例
const db = new cx.IndexDb({
    dbName: 'myDatabase',
    dbVersion: '1.0'
});

// 获取指定表的主键字段名
try {
    const keyPath = db.getStoreKeyPath('storeName');
    console.log('表的主键字段名:', keyPath);
} catch (error) {
    console.error('获取主键字段名失败:', error);
}

// 获取默认表的主键字段名
try {
    const defaultKeyPath = db.getStoreKeyPath();  // 使用默认的 defStoreName
    console.log('默认表的主键字段名:', defaultKeyPath);
} catch (error) {
    console.error('获取默认表主键字段名失败:', error);
}
```

## 注意事项

- 如果未指定 name，将使用默认的 defStoreName
- 主键字段名通常在创建存储对象时通过 keyPath 指��
- 如果存储对象不存在，会返回 undefined
- 主键字段名是存储对象的重要属性，用于唯一标识数据记录
- 获取主键字段名可以用于构建查询条件或数据结构 