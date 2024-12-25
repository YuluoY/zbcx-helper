# rulesVCode

验证码规则验证。

## 语法

```js
cx.data.rulesVCode(context)
```

### 参数

- `context` (Object): 验证上下文对象

### 返回值

- (Array<Rule>): 返回验证码验证规则数组

## 示例

```js
// 获取验证码验证规则
const rules = cx.data.rulesVCode({
  required: true // 是否必填
});
```

## 相关

- [cx.data.rulesCell](../rulesCell/README.md)
- [cx.data.rulesEmail](../rulesEmail/README.md) 