# init

应用 init 规则。

## 语法

```javascript
init(isNew, flds)
```

## 参数

- isNew: Boolean - 是否新属性
- flds: Array - 编辑字段

## 描述

根据提供的编辑字段初始化规则。

## 示例

```javascript
const tabRule = new cx.TabRule(rules, flds);
const isNew = true;
tabRule.init(isNew, flds);
```

## 注意事项

- 确保传递正确的编辑字段
- isNew 参数用于指示是否为新属性 