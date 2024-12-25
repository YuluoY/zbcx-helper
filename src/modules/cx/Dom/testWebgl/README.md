# testWebgl

检测浏览器是否支持WebGL。

## 语法

```javascript
(static) cx.dom.testWebgl(param) → {Boolean}
```

## 参数

- `param` (Object): 参数对象
  - `noWarn` (Boolean, 可选): 检测后不警告。默认值为 false。

## 返回值

- `Boolean`: 是否支持WebGL。

## 描述

该方法用于检测当前浏览器是否支持WebGL渲染。如果参数对象中的`noWarn`属性为true，则在检测不支持WebGL时不会显示警告信息。

## 示例

```javascript
// 检测WebGL支持并显示警告
const hasWebGL = cx.dom.testWebgl();
console.log('是否支持WebGL:', hasWebGL);

// 检测WebGL支持但不显示警告
const hasWebGLNoWarning = cx.dom.testWebgl({ noWarn: true });
console.log('是否支持WebGL:', hasWebGLNoWarning);
``` 