# SqlEx

`cx.SqlEx` 类 - SQL表达式。提供了一系列用于构建和操作SQL表达式的方法。

## 方法

### add
增加SQL列条件对象。

### from
通过数据构造SQL条件表达式。

### isExpEmpty
判断条件是否为空。

### isSqlCons
是否为SQL表达式元素。

## 使用示例

```javascript
// 创建SqlEx实例
const sqlEx = new cx.SqlEx();

// 添加条件
sqlEx.add(['column', '=', 'value']);

// 判断条件是否为空
const isEmpty = sqlEx.isExpEmpty();
console.log('条件是否为空:', isEmpty);

// 静态方法调用
const isCons = cx.SqlEx.isSqlCons(['column', '=', 'value']);
console.log('是否为SQL表达式元素:', isCons);
```

## 注意事项

- 实例方法需要通过 `new cx.SqlEx()` 实例化后调用
- 静态方法可以直接通过 `cx.SqlEx` 调用
- 提供灵活的SQL条件构建和判断功能 