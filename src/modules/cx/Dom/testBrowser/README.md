# testBrowser

检测浏览器类型和版本。

## 语法

```javascript
cx.dom.testBrowser()
```

## 参数

无

## 返回值

- `Object`: 包含浏览器信息的对象
  - `name` (String): 浏览器名称（如：'Chrome'、'Firefox'、'Safari'、'IE'等）
  - `version` (String): 浏览器版本号
  - `isIE` (Boolean): 是否是IE浏览器
  - `isEdge` (Boolean): 是否是Edge浏览器
  - `isChrome` (Boolean): 是否是Chrome浏览器
  - `isFirefox` (Boolean): 是否是Firefox浏览器
  - `isSafari` (Boolean): 是否是Safari浏览器
  - `isOpera` (Boolean): 是否是Opera浏览器

## 描述

`testBrowser` 方法用于检测当前浏览器的类型和版本信息。它会：

1. 解析用户代理字符串（navigator.userAgent）
2. 识别浏览器类型
3. 获取浏览器版本
4. 返回包含浏览器信息的对象

这个方法常用于：
- 浏览器兼容性检测
- 功能支持判断
- 针对特定浏览器的优化
- 提供更好的用户体验

## 示例

```javascript
// 基本使用
const browser = cx.dom.testBrowser();
console.log('浏览器名称:', browser.name);
console.log('浏览器版本:', browser.version);

// 浏览器类型判断
if (browser.isIE) {
    console.log('当前是IE浏览器');
} else if (browser.isChrome) {
    console.log('当前是Chrome浏览器');
}

// 版本检测和功能支持
if (browser.isIE && parseFloat(browser.version) < 11) {
    console.warn('当前IE版本过低，某些功能可能无法正常使用');
}

// 根据浏览器类型提供不同实现
function handleAnimation() {
    const browser = cx.dom.testBrowser();
    if (browser.isIE) {
        // IE浏览器的实现
        useIEAnimation();
    } else {
        // 现代浏览器的实现
        useModernAnimation();
    }
}
```

## 注意事项

- 用户代理字符串可能被修改，检测结果不一定100%准确
- 建议结合特性检测（feature detection）使用
- 不同浏览器的版本号格式可能不同
- 移动端浏览器可能需要特殊处理
- 某些浏览器可能会伪装成其他浏览器 