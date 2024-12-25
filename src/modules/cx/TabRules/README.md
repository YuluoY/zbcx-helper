# TabRules

`cx.TabRules` 类 - 字段规则的集合实现。

## 构造函数

```javascript
new TabRules(rules)
```

### 参数
- rules: Array - 配置的字段规则

## 实例方法

- **getRules(tabname)** → {Array.<Object>}: 根据表名获取对应的规则列表
  - tabname: String - 表名
- **getTabRule(tabname, flds)** → {cx.TabRule}: 根据表名获取对应的表规则对象
  - tabname: String - 表名
  - flds: Array - 字段信息
- **init(rules)**: 初始化
  - rules: Array - 配置的字段规则

## 使用示例

```javascript
// 创建TabRules实例
const tabRules = new cx.TabRules(rules);

// 获取规则列表
const ruleList = tabRules.getRules('tableName');
console.log('规则列表:', ruleList);

// 获取表规则对象
const tabRule = tabRules.getTabRule('tableName', flds);
console.log('表规则对象:', tabRule);

// 初始化规则
const newRules = [];
tabRules.init(newRules);
```

## 注意事项

- 需要通过 `new cx.TabRules()` 创建实例后使用
- 提供灵活的字段规则管理功能 