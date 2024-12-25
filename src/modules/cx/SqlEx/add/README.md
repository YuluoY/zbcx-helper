# add

增加SQL列条件对象。

## 语法

```javascript
add(sqlCon)
```

## 参数

- sqlCon: cx.SqlEx | cx.SqlColEx | Array - SQL列条件对象，格式: SqlEx 或 SqlColEx 或 [列,操作符,值,连接符]

## 返回值

无

## 示例

```javascript
// 创建SqlEx实例
const sqlEx = new cx.SqlEx();

// 添加条件
sqlEx.add(['column', '=', 'value']);

// 使用SqlColEx对象添加条件
const sqlColEx = new cx.SqlColEx('column', '=', 'value');
sqlEx.add(sqlColEx);
```

## 注意事项

- 需要通过 `new cx.SqlEx()` 实例化后调用
- 用于构建复杂的SQL条件表达式 