# getRules

根据表名获取对应的规则列表。

## 语法

```javascript
getRules(tabname) → {Array.<Object>}
```

## 参数

- tabname: String - 表名

## 返回值

- Array.<Object> - 规则列表

## 描述

根据提供的表名获取对应的规则列表。

## 示例

```javascript
const tabRules = new cx.TabRules(rules);
const ruleList = tabRules.getRules('tableName');
console.log('规则列表:', ruleList);
```

## 注意事项

- 确保传递正确的表名
- 返回的规则列表包含每个规则的详细信息 