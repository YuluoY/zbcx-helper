# rgbToRgba

RGB 转 RGBA。

## 语法

```javascript
static rgbToRgba(sRgb, opacity = 1)
```

## 参数

| 参数名 | 类型 | 是否可选 | 默认值 | 描述 |
|--------|------|----------|---------|------|
| sRgb | String | 否 | - | RGB 颜色,如 rgb(12,34,56) |
| opacity | Number | 是 | 1 | 透明度值(0~1),0表示完全透明,1表示完全不透明 |

## 返回值

| 类型 | 描述 |
|------|------|
| String | RGBA 格式的颜色字符串 |

## 描述

`rgbToRgba` 方法用于将 RGB 格式的颜色转换为带有透明度的 RGBA 格式。它会:

1. 解析 RGB 字符串中的颜色值
2. 添加指定的透明度值
3. 生成 RGBA 格式的颜色字符串

这个方法常用于:
- 添加颜色透明度
- 创建半透明效果
- 动态调整颜色透明度

## 示例

```javascript
// 基本用法
const rgba = cx.Color.rgbToRgba('rgb(255,66,238)', 0.5);
console.log(rgba); // 输出: 'rgba(255,66,238,0.5)'

// 使用默认透明度
const solid = cx.Color.rgbToRgba('rgb(255,66,238)');
console.log(solid); // 输出: 'rgba(255,66,238,1)'

// 创建完全透明的颜色
const transparent = cx.Color.rgbToRgba('rgb(255,66,238)', 0);
console.log(transparent); // 输出: 'rgba(255,66,238,0)'

// 在样式中使用
const element = {
    style: {
        // 半透明背景
        backgroundColor: cx.Color.rgbToRgba('rgb(255,66,238)', 0.2),
        // 半透明文本
        color: cx.Color.rgbToRgba('rgb(0,0,0)', 0.7),
        // 半透明边框
        border: `1px solid ${cx.Color.rgbToRgba('rgb(255,66,238)', 0.5)}`
    }
};
console.log(element.style);
/*
输出:
{
    backgroundColor: 'rgba(255,66,238,0.2)',
    color: 'rgba(0,0,0,0.7)',
    border: '1px solid rgba(255,66,238,0.5)'
}
*/

// 创建透明度渐变
const opacities = [0.2, 0.4, 0.6, 0.8, 1];
const gradientColors = opacities.map(opacity => 
    cx.Color.rgbToRgba('rgb(255,66,238)', opacity)
);
console.log(gradientColors);
/*
输出:
[
    'rgba(255,66,238,0.2)',
    'rgba(255,66,238,0.4)',
    'rgba(255,66,238,0.6)',
    'rgba(255,66,238,0.8)',
    'rgba(255,66,238,1)'
]
*/
``` 