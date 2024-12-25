# TabRule

`cx.TabRule` 类 - 字段规则的实现。

## 构造函数

```javascript
new TabRule(rules, flds)
```

### 参数
- rules: Array - 规则
- flds: Array - 字段信息

## 实例方法

- **change(fld, flds, notify)**: 应用 change 规则
  - fld: Object - 字段信息
  - flds: Array - 编辑字段
  - notify: Object - 通知对象
- **check(flds, att)** → {Boolean|String}: 应用 finish 规则
  - flds: Array - 编辑字段
  - att: Object - 属性对象
- **init(isNew, flds)**: 应用 init 规则
  - isNew: Boolean - 是否新属性
  - flds: Array - 编辑字段

## 使用示例

```javascript
// 创建TabRule实例
const tabRule = new cx.TabRule(rules, flds);

// 应用change规则
const notify = {};
tabRule.change(fld, flds, notify);

// 检查规则
const result = tabRule.check(flds, att);
console.log('检查结果:', result);

// 初始化规则
const isNew = true;
tabRule.init(isNew, flds);
```

## 注意事项

- 需要通过 `new cx.TabRule()` 创建实例后使用
- 提供灵活的字段规则应用功能 