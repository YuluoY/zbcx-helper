# merge

合并多个条件, 返回合并后的条件。

## 语法

```javascript
static merge(result, ...argvs) → {cx.SqlEx}
```

## 参数

- result: cx.SqlEx - SQL条件表达式
- argvs: cx.SqlEx (可重复) - 可变参数, SqlEx 条件对象

## 返回值

- cx.SqlEx - 合并后的SQL条件表达式

## 示例

```javascript
const mergedExp = cx.sqlexp.merge(result, exp1, exp2);
console.log('合并后的条件表达式:', mergedExp);
```

## 注意事项

- 直接通过 `cx.sqlexp.merge` 调用
- 用于合并多个SQL条件表达式 