# add

增加数据。

## 基本信息

- 功能说明：向 IndexedDB 数据库中添加单条数据记录
- 所属类：cx.IndexDb
- 类实例化：需要通过 new 操作符创建实例

## 参数说明

options: Object - 参数对象
- name: String - 表名，默认使用 defStoreName（可选）
- data: Object - 待新增的数据对象
  - key: String - 级存唯一标识
  - value: * - 级存的值
- keyFunc: Function - 给 data 数据构造键值，附加 key 属性，keyFunc(data)（可选）

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

// 方式一：直接添加带有 key 的数据
const data = {
    key: 'uniqueKey',
    value: 'someValue'
};

try {
    await db.add({
        name: 'storeName',
        data: data
    });
    console.log('数据添加成功');
} catch (error) {
    console.error('数据添加失败:', error);
}

// 方式二：使用 keyFunc 构造键值
const dataWithoutKey = {
    value: 'someValue'
};

try {
    await db.add({
        name: 'storeName',
        data: dataWithoutKey,
        keyFunc: (data) => {
            data.key = 'generated_' + Date.now();
            return data;
        }
    });
    console.log('数据添加成功');
} catch (error) {
    console.error('数据添加失败:', error);
}
```

## 注意事项

- 确保在调用 add 方法前已经创建了对应的存储对象（store）
- 如果未指定 name，将使用默认的 defStoreName
- 数据对象必须包含 key 属性作为唯一标识，或通过 keyFunc 生成
- 如果添加的数据主键已存在，会抛出错误
- 如果配置了 autoIncrement 为 true，则不需要手动指定 key 值
- 添加操作是异步的，需要使用 await 等待操作完成