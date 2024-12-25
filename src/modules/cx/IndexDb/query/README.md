# query

查询数据。

## 基本信息

- 功能说明：根据条件查询数据库中的数据
- 所属类：cx.IndexDb
- 类实例化：需要通过 new 操作符创建实例

## 参数说明

options: Object - 参数对象
- name: String - 表名，默认使用 defStoreName（可选）
- key: String - 级存标识，比如 id
- index: Object - 根据索引查询，索引的检索条件，比 key 的优先级低，当没有传入 key 时，才会用 index 去检索（可选）
  - name: String - 索引名称
  - value: String - 索引字段对应的值
  - 示例：{ name: 'name', value: '张三' }

## 返回值

- Promise - 异步操作的 Promise 对象
  - resolve: 返回查询到的数据
  - reject: 查询失败，返回错误信息

## 使用示例

```javascript
// 创建数据库实例
const db = new cx.IndexDb({
    dbName: 'myDatabase',
    dbVersion: '1.0'
});

// 方式一：使用主键查询
try {
    const result = await db.query({
        name: 'storeName',
        key: 'uniqueId123'
    });
    console.log('查询结果:', result);
} catch (error) {
    console.error('查询失败:', error);
}

// 方式二：使用索引查询
try {
    const result = await db.query({
        name: 'storeName',
        index: {
            name: 'name',
            value: '张三'
        }
    });
    console.log('索引查询结果:', result);
} catch (error) {
    console.error('索引查询失败:', error);
}
```

## 注意事项

- 如果未指定 name，将使用默认的 defStoreName
- key 和 index 是互斥的，当指定了 key 时会忽略 index
- 使用索引查询前需要确保已经创建了对应的索引
- 索引查询可能返回多条记录
- 如果没有找到匹配的数据，返回 undefined
- 查询操作是异步的，需要使用 await 等待操作完成
- 建议根据实际需求选择合适的查询方式：
  - 已知主键时使用 key 查询
  - 需要按其他字段查询时使用 index 