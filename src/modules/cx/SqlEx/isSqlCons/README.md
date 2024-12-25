# isSqlCons

是否为SQL表达式元素。

## 语法

```javascript
static isSqlCons(sqlCons) → {Boolean}
```

## 参数

- sqlCons: Array - 元子表达式，格式: [列, 操作符, 值, 连接符]

## 返回值

- Boolean - 判断结果

## 示例

```javascript
// 判断是否为SQL表达式元素
const isCons = cx.SqlEx.isSqlCons(['column', '=', 'value']);
console.log('是否为SQL表达式元素:', isCons);
```

## 注意事项

- 直接通过 `cx.SqlEx.isSqlCons` 调用
- 用于验证给定的数组是否符合SQL条件表达式的格式 