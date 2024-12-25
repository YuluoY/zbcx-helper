# 级别相关常量

## LEVEL_DANGER
危险级别。

## LEVEL_EMPHASIZE
强调级别。

## LEVEL_NORMAL
普通级别。

## LEVEL_WARN
警告级别。

## 示例

```js
// 设置危险级别
message.level = cx.consts.LEVEL_DANGER;

// 设置警告级别
message.level = cx.consts.LEVEL_WARN;

// 设置普通级别
message.level = cx.consts.LEVEL_NORMAL;

// 设置强调级别
message.level = cx.consts.LEVEL_EMPHASIZE;

// 根据级别显示不同样式
switch (message.level) {
  case cx.consts.LEVEL_DANGER:
    // 显示红色样式
    break;
  case cx.consts.LEVEL_WARN:
    // 显示黄色样式
    break;
  case cx.consts.LEVEL_NORMAL:
    // 显示默认样式
    break;
  case cx.consts.LEVEL_EMPHASIZE:
    // 显示加粗样式
    break;
}