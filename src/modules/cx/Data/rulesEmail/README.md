# rulesEmail

邮箱规则验证。

## 语法

```js
cx.data.rulesEmail(context)
```

### 参数

- `context` (Object): 验证上下文对象

### 返回值

- (Array<Rule>): 返回邮箱验证规则数组

## 示例

```js
// 获取邮箱验证规则
const rules = cx.data.rulesEmail({
  required: true // 是否必填
});
```

## 相关

- [cx.data.rulesCell](../rulesCell/README.md)
- [cx.data.rulesVCode](../rulesVCode/README.md) 