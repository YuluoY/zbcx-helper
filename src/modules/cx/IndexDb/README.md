# IndexDb

IndexDb 是一个用于操作 IndexedDB 的工具类。需要通过 new 操作符来创建实例。

## 构造函数

```javascript
new IndexDb(options)
```

### 参数说明

options: Object 类型，包含以下属性：
- dbName: String - 数据库名称
- dbVersion: String - 数据库版本号（可选）

### 配置说明

#### StoreConf 存储配置
- name: String - 表名
- conf: Object - 表的配置键值（可选）
  - keyPath: String - 主键路径，默认值为 'key'
  - autoIncrement: Boolean - 表示主动递增，默认值为 false
- indexs: Array<IndexConf> - 表的索引配置（可选）

#### IndexConf 索引配置
- name: String - 索引名（可选）
- conf: Object - 索引配置对象（可选）
  - unique: Boolean - 是否唯一索引，默认值为 false

### 使用示例

```javascript
const db = new cx.IndexDb({
  dbName: 'myDatabase',
  dbVersion: '1.0'
});

// 默认配置示例
const defaultStore = {
  name: 'store',
  conf: { 
    keyPath: 'key'
  }
};
```

## 函数列表

### add
添加数据到数据库中。

### adds
批量添加数据到数据库中。

### clear
清空数据库。

### closeDb
关闭数据库连接。

### createDb
创建数据库。

### createStores
创建存储对象。

### defStoreKeyPath
定义存储对象的主键路径。

### defStoreName
定义存储对象名称。

### delete
删除数据。

### deleteStores
删除存储对象。

### dels
批量删除数据。

### getAlldata
获取所有数据。

### getStore
获取存储对象。

### getStoreKeyPath
获取存储对象的主键路径。

### query
查询数据。

### queryByIndexs
通过索引查询数据。

### queryByKeys
通过主键查询数据。

### update
更新数据。

### updates
批量更新数据。 