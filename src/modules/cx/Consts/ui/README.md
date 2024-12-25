# UI相关常量

## UI_COM
组件类型。

## UI_DIALOG
对话框类型。

## UI_NONE
无UI类型。

## UI_ROUTE
路由类型。

## 示例

```js
// 根据UI类型显示不同的界面
switch (uiType) {
  case cx.consts.UI_COM:
    // 显示组件
    showComponent();
    break;
  case cx.consts.UI_DIALOG:
    // 显示对话框
    showDialog();
    break;
  case cx.consts.UI_ROUTE:
    // 显示路由页面
    showRoutePage();
    break;
  case cx.consts.UI_NONE:
    // 不显示UI
    break;
}

// 判断是否为对话框类型
const isDialog = type === cx.consts.UI_DIALOG;

// 判断是否为组件类型
const isComponent = type === cx.consts.UI_COM;

// 判断是否为路由类型
const isRoute = type === cx.consts.UI_ROUTE;

// 判断是否显示UI
const shouldShowUI = type !== cx.consts.UI_NONE;
``` 