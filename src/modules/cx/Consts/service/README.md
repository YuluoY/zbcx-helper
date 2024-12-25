# 服务相关常量

## SERVICE_AJAX
AJAX服务类型。

## SERVICE_MOCK
模拟数据服务类型。

## SERVICE_SOCKET
WebSocket服务类型。

## 示例

```js
// 根据服务类型初始化不同的服务实例
switch (serviceType) {
  case cx.consts.SERVICE_AJAX:
    // 初始化AJAX服务
    initAjaxService();
    break;
  case cx.consts.SERVICE_MOCK:
    // 初始化模拟数据服务
    initMockService();
    break;
  case cx.consts.SERVICE_SOCKET:
    // 初始化WebSocket服务
    initWebSocketService();
    break;
}

// 判断是否为AJAX服务
const isAjaxService = serviceType === cx.consts.SERVICE_AJAX;

// 判断是否为模拟数据服务
const isMockService = serviceType === cx.consts.SERVICE_MOCK;

// 判断是否为WebSocket服务
const isWebSocketService = serviceType === cx.consts.SERVICE_SOCKET;