# 场景相关常量

## SCENE_23D
2D/3D混合场景。

## SCENE_2D
2D场景。

## SCENE_3D
3D场景。

## 示例

```js
// 根据场景类型初始化不同的渲染器
switch (sceneType) {
  case cx.consts.SCENE_2D:
    // 初始化2D渲染器
    init2DRenderer();
    break;
  case cx.consts.SCENE_3D:
    // 初始化3D渲染器
    init3DRenderer();
    break;
  case cx.consts.SCENE_23D:
    // 初始化2D/3D混合渲染器
    init23DRenderer();
    break;
}

// 判断是否为3D场景
const is3DScene = sceneType === cx.consts.SCENE_3D;

// 判断是否为2D场景
const is2DScene = sceneType === cx.consts.SCENE_2D;

// 判断是否为混合场景
const isMixedScene = sceneType === cx.consts.SCENE_23D;