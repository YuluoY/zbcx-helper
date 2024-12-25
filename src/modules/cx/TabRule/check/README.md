# check

应用 finish 规则。

## 语法

```javascript
check(flds, att) → {Boolean|String}
```

## 参数

- flds: Array - 编辑字段
- att: Object - 属性对象

## 返回值

- Boolean|String - 检查结果

## 描述

根据提供的编辑字段和属性对象应用 finish 规则。

## 示例

```javascript
const tabRule = new cx.TabRule(rules, flds);
const result = tabRule.check(flds, att);
console.log('检查结果:', result);
```

## 注意事项

- 确保传递正确的编辑字段和属性对象
- 返回值可以是布尔值或字符串，表示检查结果 