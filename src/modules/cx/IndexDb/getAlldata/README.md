# getAlldata

查询指定表的所有数据。

## 基本信息

- 功能说明：获取指定存储对象中的所有数据记录
- 所属类：cx.IndexDb
- 类实例化：需要通过 new 操作符创建实例

## 参数说明

- name: String - 表名，默认使用 defStoreName（可选）

## 返回值

- Promise - 异步操作的 Promise 对象
  - resolve: 返回所有数据记录的数组
  - reject: 查询失败，返回错误信息

## 使用示例

```javascript
// 创建数据库实例
const db = new cx.IndexDb({
    dbName: 'myDatabase',
    dbVersion: '1.0'
});

// 方式一：查询指定表的所有数据
try {
    const allData = await db.getAlldata('storeName');
    console.log('查询成功，数据列表:', allData);
} catch (error) {
    console.error('查询失败:', error);
}

// 方式二：查询默认表的所有数据
try {
    const defaultStoreData = await db.getAlldata();  // 使用默认的 defStoreName
    console.log('默认表数据查询成功，数据列表:', defaultStoreData);
} catch (error) {
    console.error('默认表数据查询失败:', error);
}
```

## 注意事项

- 如果未指定 name，将使用默认的 defStoreName
- 如果存储对象中数据量较大，此操作可能会消耗较多内存和时间
- 返回的数据数组中的每个对象都包含 key 和 value 属性
- 查询操作是异步的，需要使用 await 等待操作完成
- 如果指定的存储对象不存在，会抛出错误
- 建议在数据量较大时考虑使用分页查询或其他查询方式
  </rewritten_file> 