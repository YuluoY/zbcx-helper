# 规则相关常量

## RULE_CHANGE
规则变更。

## RULE_FINISH
规则完成。

## RULE_INIT
规则初始化。

## RULE_INITNEW
新规则初始化。

## RULE_INITOLD
旧规则初始化。

## 示例

```js
// 根据规则状态执行不同的处理
switch (ruleStatus) {
  case cx.consts.RULE_INIT:
    // 初始化规则
    initRule();
    break;
  case cx.consts.RULE_CHANGE:
    // 处理规则变更
    handleRuleChange();
    break;
  case cx.consts.RULE_FINISH:
    // 处理规则完成
    handleRuleFinish();
    break;
}

// 判断是否为新规则初始化
if (type === cx.consts.RULE_INITNEW) {
  // 执行新规则初始化逻辑
}

// 判断是否为旧规则初始化
if (type === cx.consts.RULE_INITOLD) {
  // 执行旧规则初始化逻辑
}