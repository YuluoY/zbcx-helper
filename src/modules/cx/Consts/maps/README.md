# 地图相关常量

## MAPS_ICON
图标类型地图元素。

## MAPS_MODEL
模型类型地图元素。

## MAPS_SYMBOL
符号类型地图元素。

## MAPS_VECTOR
矢量类型地图元素。

## 示例

```js
// 判断地图元素类型
switch (element.type) {
  case cx.consts.MAPS_ICON:
    // 图标类型处理
    break;
  case cx.consts.MAPS_MODEL:
    // 模型类型处理
    break;
  case cx.consts.MAPS_SYMBOL:
    // 符号类型处理
    break;
  case cx.consts.MAPS_VECTOR:
    // 矢量类型处理
    break;
}

// 创建不同类型的地图元素
const icon = map.createElement(cx.consts.MAPS_ICON);
const model = map.createElement(cx.consts.MAPS_MODEL);
const symbol = map.createElement(cx.consts.MAPS_SYMBOL);
const vector = map.createElement(cx.consts.MAPS_VECTOR);
``` 