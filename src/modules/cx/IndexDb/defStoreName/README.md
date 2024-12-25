# defStoreName

默认表名，使用取值函数（getter）设置默认的表名属性 defStoreName。

## 基本信息

- 功能说明：获取默认的存储对象表名
- 所属类：cx.IndexDb
- 类实例化：需要通过 new 操作符创建实例

## 参数说明

此方法不需要参数。

## 返回值

- String - 返回默认的表名

## 使用示例

```javascript
// 创建数据库实例
const db = new cx.IndexDb({
    dbName: 'myDatabase',
    dbVersion: '1.0'
});

// 获取默认表名
const defaultStoreName = db.defStoreName;
console.log('默认表名:', defaultStoreName);  // 通常返回 'store'

// 在操作存储对象时使用默认表名
try {
    const data = { key: 'key1', value: 'value1' };
    await db.add({
        name: db.defStoreName,  // 使用默认表名
        data: data
    });
    console.log('数据添加成功');
} catch (error) {
    console.error('数据添加失败:', error);
}
```

## 注意事项

- 这是一个 getter 属性，不是方法，使用时不需要加括号
- 默认表名通常为 'store'
- 此属性值在实例化时已确定，不可修改
- 建议��操作存储对象时使用此属性来保持表名的一致性
- 如果需要使用自定义的表名，可以在操作存储对象时直接指定 name
  </rewritten_file> 