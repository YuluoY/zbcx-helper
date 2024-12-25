# change

应用 change 规则。

## 语法

```javascript
change(fld, flds, notify)
```

## 参数

- fld: Object - 字段信息
- flds: Array - 编辑字段
- notify: Object - 通知对象

## 描述

根据提供的字段信息和编辑字段应用 change 规则。

## 示例

```javascript
const tabRule = new cx.TabRule(rules, flds);
const notify = {};
tabRule.change(fld, flds, notify);
```

## 注意事项

- 确保传递正确的字段信息和编辑字段
- notify 对象用于接收变更通知 