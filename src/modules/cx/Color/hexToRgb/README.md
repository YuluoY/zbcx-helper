# hexToRgb

十六进制颜色转 RGB。

## 语法

```javascript
static hexToRgb(sHex, opacity = 1, isFinal = true)
```

## 参数

| 参数名 | 类型 | 是否可选 | 默认值 | 描述 |
|--------|------|----------|---------|------|
| sHex | String | 否 | - | 十六进制颜色,如 #FF42EE |
| opacity | Number | 是 | 1 | 颜色透明度(0~1), 0表示完全透明,1表示完全不透明 |
| isFinal | Boolean | 是 | true | 是否返回最终的 RGB/RGBA 字符串 |

## 返回值

| 类型 | 描述 |
|------|------|
| String \| Array | 如果 isFinal 为 true,返回 RGB/RGBA 格式的颜色字符串;否则返回 RGB 颜色值数组 [r, g, b] |

## 描述

`hexToRgb` 方法用于将十六进制格式的颜色转换为 RGB 或 RGBA 格式。它会:

1. 解析十六进制颜色字符串中的 R、G、B 值
2. 将这些值转换为十进制数
3. 根据参数决定是否添加透明度
4. 返回相应格式的结果

这个方法常用于:
- 颜色格式转换
- 处理带透明度的颜色
- 颜色计算和处理

## 示例

```javascript
// 基本用法 - 转换为 RGB
const rgb = cx.Color.hexToRgb('#FF42EE');
console.log(rgb); // 输出: 'rgb(255,66,238)'

// 添加透明度 - 转换为 RGBA
const rgba = cx.Color.hexToRgb('#FF42EE', 0.5);
console.log(rgba); // 输出: 'rgba(255,66,238,0.5)'

// 获取颜色值数组
const colorArray = cx.Color.hexToRgb('#FF42EE', 1, false);
console.log(colorArray); // 输出: [255, 66, 238]

// 在样式中使用
const element = {
    style: {
        backgroundColor: cx.Color.hexToRgb('#FF42EE', 0.8),
        color: cx.Color.hexToRgb('#000000'),
        borderColor: cx.Color.hexToRgb('#FF42EE', 0.3)
    }
};
console.log(element.style);
/*
输出:
{
    backgroundColor: 'rgba(255,66,238,0.8)',
    color: 'rgb(0,0,0)',
    borderColor: 'rgba(255,66,238,0.3)'
}
*/

// 颜色处理
const [r, g, b] = cx.Color.hexToRgb('#FF42EE', 1, false);
const brightness = (r * 299 + g * 587 + b * 114) / 1000;
console.log(`颜色亮度: ${brightness}`); // 计算颜色亮度