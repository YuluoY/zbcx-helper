# init

初始化。

## 语法

```javascript
init(rules)
```

## 参数

- rules: Array - 配置的字段规则

## 描述

初始化字段规则。

## 示例

```javascript
const tabRules = new cx.TabRules([]);
const newRules = [];
tabRules.init(newRules);
```

## 注意事项

- 确保传递正确的规则配置
- 用于重新初始化字段规则 