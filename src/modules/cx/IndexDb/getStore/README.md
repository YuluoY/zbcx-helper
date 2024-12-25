# getStore

根据表名获取表 IDBObjectStore 对象。

## 基本信息

- 功能说明：根据表名获取 IDBObjectStore 对象
- 所属类：cx.IndexDb
- 类实例化：需要通过 new 操作符创建实例

## 参数说明

- name: String - 表名，默认使用 defStoreName（可选）
- opertype: String - 操作类型，默认为 'readonly'（可选）
  - 'readonly': 只读
  - 'readwrite': 读写

## 返回值

- IDBObjectStore | null - 返回存储对象实例或 null

## 使用示例

```javascript
// 创建数据库实例
const db = new cx.IndexDb({
    dbName: 'myDatabase',
    dbVersion: '1.0'
});

// 获取只读存储对象
try {
    const store = db.getStore('storeName', 'readonly');
    if (store) {
        console.log('获取只读存储对象成功');
        // 使用存储对象进行操作
    } else {
        console.log('存储对象不存在');
    }
} catch (error) {
    console.error('获取存储对象失败:', error);
}

// 获取读写存储对象
try {
    const store = db.getStore('storeName', 'readwrite');
    if (store) {
        console.log('获取读写存储对象成功');
        // 使用存储对象进行操作
    } else {
        console.log('存储对象不存在');
    }
} catch (error) {
    console.error('获取存储对象失败:', error);
}
```

## 注意事项

- 如果未指定 name，将使用默认的 defStoreName
- 如果未指定 opertype，默认使用 'readonly' 模式
- 根据操作需求选择合适的操作类型：
  - 查询操作使用 'readonly'
  - 修改操作使用 'readwrite'
- 如果指定的存储对象不存在，返回 null
- 获取的 IDBObjectStore 对象可以用于直接操作数据库
- 使用完毕后不需要手动关闭存储对象
  </rewritten_file> 