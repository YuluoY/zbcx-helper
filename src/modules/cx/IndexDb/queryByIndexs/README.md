# queryByIndexs

根据索引查询数据。

## 基本信息

- 功能说明：根据索引条件查询数据库中的数据
- 所属类：cx.IndexDb
- 类实例化：需要通过 new 操作符创建实例

## 参数说明

options: Object - 参数对象
- name: String - 表名，默认使用 defStoreName（可选）
- indexs: Array<Object> - 根据索引查询，索引集合
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

// 使用多个索引条件查询
try {
    const result = await db.queryByIndexs({
        name: 'storeName',
        indexs: [
            { name: 'name', value: '张三' },
            { name: 'name', value: '李四' }
        ]
    });
    console.log('查询结果:', result);
} catch (error) {
    console.error('查��失败:', error);
}

// 使用单个索引条件查询
try {
    const result = await db.queryByIndexs({
        name: 'storeName',
        indexs: [
            { name: 'age', value: '25' }
        ]
    });
    console.log('查询结果:', result);
} catch (error) {
    console.error('查询失败:', error);
}
```

## 注意事项

- 如果未指定 name，将使用默认的 defStoreName
- 使用索引查询前需要确保已经创建了对应的索引
- indexs 数组中可以包含多个索引条件，返回满足任一条件的数据
- 每个索引条件都是独立的，它们之间是"或"的关系
- 查询结果可能包含多条记录
- 如果没有找到匹配的数据，返回空数组
- 查询操作是异步的，需要使用 await 等待操作完成 