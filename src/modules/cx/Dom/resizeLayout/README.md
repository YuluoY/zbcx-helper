# resizeLayout

根据视口和设计稿尺寸更新rem值。

## 语法

```javascript
(static) cx.dom.resizeLayout(config, isObserveWin) → {void}
```

## 参数

- `config` (Object, 可选): 配置对象，默认使用cx.config
  - `remToPx` (Number): 根节点字体大小，单位px
  - `designPx` (Number): ui页面设计稿尺寸，单位px
- `isObserveWin` (Boolean, 可选): 是否监听窗口大小变化

## 返回值

- `void`: 无返回值。

## 描述

`resizeLayout` 方法用于根据视口大小和设计稿尺寸动态调整页面的rem值。它会：

1. 根据传入的配置或默认配置计算合适的rem基准值
2. 更新根节点(html)的font-size值
3. 可选择是否监听窗口大小变化，自动调整rem值

这个方法常用于：
- 实现响应式布局
- 适配不同屏幕尺寸
- 保持页面元素比例一致
- 简化移动端适配

## 示例

```javascript
// 使用默认配置
cx.dom.resizeLayout();

// 使用自定义配置
cx.dom.resizeLayout({
    remToPx: 100,  // 1rem = 100px
    designPx: 750  // 设计稿宽度为750px
}, true);  // 监听窗口大小变化

// 在页��初始化时调用
window.onload = function() {
    cx.dom.resizeLayout({
        remToPx: 50,
        designPx: 1920
    });
};
```

## 注意事项

- 建议在页面初始化时调用此方法
- 如果启用了窗口大小监听，会在窗口大小变化时自动调整rem值
- 确保设计稿尺寸与实际使用的设计稿一致
- rem值的变化会影响所有使用rem单位的元素 