# queryByKeys

根据主键查询数据。

## 基本信息

- 功能说明：根据主键集合查询数据库中的数据
- 所属类：cx.IndexDb
- 类实例化：需要通过 new 操作符创建实例

## 参数说明

options: Object - 参数对象
- name: String - 表名，默认使用 defStoreName（可选）
- keys: Array<String> - 级存标识集合，比如 [1,2,3]
- indexs: Array<Object> - 根据索引查询，索引集合（可选）
  - name: String - 索引名称
  - value: String - 索引值
  - 示例：[{name: 'name', value: '张三'}, {name: 'name', value: '李四'}]

## 返回值

- Promise - 异步操作的 Promise 对象
  - resolve: 返回查询到的数据数组
  - reject: 查询失败，返回错误信息

## 使用示例

```javascript
// 创建数据库实例
const db = new cx.IndexDb({
    dbName: 'myDatabase',
    dbVersion: '1.0'
});

// 使用主键集合查询
try {
    const result = await db.queryByKeys({
        name: 'storeName',
        keys: ['key1', 'key2', 'key3']
    });
    console.log('主键查询结果:', result);
} catch (error) {
    console.error('主键查询失败:', error);
}

// 使用主键和索引组合查询
try {
    const result = await db.queryByKeys({
        name: 'storeName',
        keys: ['key1', 'key2'],
        indexs: [
            { name: 'name', value: '张三' }
        ]
    });
    console.log('组合查询结果:', result);
} catch (error) {
    console.error('组合查询失败:', error);
}
```

## 注意事项

- 如果未指定 name，将使用默认的 defStoreName
- keys 数组中可以包含多个主键值，返回所有匹配的数据
- 如果同时指定了 indexs，会在主键查询结果的基础上进行索引过滤
- 使用索引查询前需要确保已经创建了对应的索引
- 查询结果可能包含多条记录
- 如果没有找到匹配的数据，返回空数组
- 查询操作是异步的，需要使用 await 等待操作完成 