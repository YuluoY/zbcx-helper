# adds

批量添加数据。

## 基本信息

- 功能说明：向 IndexedDB 数据库中批量添加多条数据记录
- 所属类：cx.IndexDb
- 类实例化：需要通过 new 操作符创建实例

## 参数说明

options: Object - 参数对象
- name: String - 表名，默认使用 defStoreName（可选）
- datas: Array<Object> - 待添加数据集合，每个对象与 add 中 data 结构一致
- keyFunc: Function - datas 中每项构造 key 属性，keyFunc(data)（可选）

## 返回值

- Promise - 异步操作的 Promise 对象
  - resolve: 添加成功
  - reject: 添加失败，返回错误信息

## 使用示例

```javascript
// 创建数据库实例
const db = new cx.IndexDb({
    dbName: 'myDatabase',
    dbVersion: '1.0'
});

// 方式一：直接添加带有 key 的数据数组
const datas = [
    { key: 'key1', value: 'value1' },
    { key: 'key2', value: 'value2' },
    { key: 'key3', value: 'value3' }
];

try {
    await db.adds({
        name: 'storeName',
        datas: datas
    });
    console.log('数据批量添加成功');
} catch (error) {
    console.error('数据批量添加失败:', error);
}

// 方式二：使用 keyFunc 为每条数据生成键值
const datasWithoutKeys = [
    { value: 'value1' },
    { value: 'value2' },
    { value: 'value3' }
];

try {
    await db.adds({
        name: 'storeName',
        datas: datasWithoutKeys,
        keyFunc: (data) => {
            data.key = 'generated_' + Date.now() + '_' + Math.random();
            return data;
        }
    });
    console.log('数据批量添加成功');
} catch (error) {
    console.error('数据批量添加失败:', error);
}
```

## 注意事项

- 确保在调用 adds 方法前已经创建了对应的存储对象（store）
- 如果未指定 name，将使用默认的 defStoreName
- 每个数据对象必须包含 key 属性作为唯一标识，或通过 keyFunc 生成
- 如果任何一条数据的主键已存在，整个批量添加操作都会失败
- 如果配置了 autoIncrement 为 true，则不需要手动指定 key 值
- 批量添加操作会在一个事务中完成，保证数据的一致性
- 添加操作是异步的，需要使用 await 等待操作完成