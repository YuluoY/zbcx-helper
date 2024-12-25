# getTabRule

根据表名获取对应的表规则对象。

## 语法

```javascript
getTabRule(tabname, flds) → {cx.TabRule}
```

## 参数

- tabname: String - 表名
- flds: Array - 字段信息

## 返回值

- cx.TabRule - 表规则对象

## 描述

根据提供的表名和字段信息获取对应的表规则对象。

## 示例

```javascript
const tabRules = new cx.TabRules(rules);
const tabRule = tabRules.getTabRule('tableName', flds);
console.log('表规则对象:', tabRule);
```

## 注意事项

- 确保传递正确的表名和字段信息
- 返回的对象是一个 `cx.TabRule` 实例 