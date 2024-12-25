# 实体类型相关常量

## ENTITY_LIN
线实体类型。

## ENTITY_NOTE
注记实体类型。

## ENTITY_PNT
点实体类型。

## ENTITY_REG
面实体类型。

## ENTITY_TABLE
表格实体类型。

## 示例

```js
// 判断是否为点实体
if (entity.type === cx.consts.ENTITY_PNT) {
  // 点实体特定的处理逻辑
}

// 判断是否为线实体
if (entity.type === cx.consts.ENTITY_LIN) {
  // 线实体特定的处理逻辑
}

// 判断是否为面实体
if (entity.type === cx.consts.ENTITY_REG) {
  // 面实体特定的处理逻辑
}
``` 