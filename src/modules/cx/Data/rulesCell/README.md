# rulesCell

手机号规则验证。

## 语法

```js
cx.data.rulesCell(context)
```

### 参数

- `context` (Object): 验证上下文对象

### 返回值

- (Array<Rule>): 返回手机号验证规则数组

## 示例

```js
// 获取手机号验证规则
const rules = cx.data.rulesCell({
  required: true // 是否必填
});
```

## 相关

- [cx.data.rulesEmail](../rulesEmail/README.md)
- [cx.data.rulesVCode](../rulesVCode/README.md) 