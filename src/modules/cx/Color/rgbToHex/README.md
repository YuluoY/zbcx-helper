# rgbToHex

RGB 转十六进制。

## 语法

```javascript
static rgbToHex(sRgb)
```

## 参数

| 参数名 | 类型 | 是否可选 | 描述 |
|--------|------|----------|------|
| sRgb | String | 否 | RGB 颜色,如 rgb(12,33,23) |

## 返回值

| 类型 | 描述 |
|------|------|
| String | 十六进制格式的颜色字符串 |

## 描述

`rgbToHex` 方法用于将 RGB 格式的颜色转换为十六进制格式。它会:

1. 解析 RGB 字符串中的 R、G、B 值
2. 将这些值转换为十六进制
3. 组合成 '#RRGGBB' 格式的颜色字符串

这个方法常用于:
- 颜色格式转换
- 标准化颜色表示
- 颜色计算和处理

## 示例

```javascript
// 基本用法
const hex = cx.Color.rgbToHex('rgb(255,66,238)');
console.log(hex); // 输出: '#FF42EE'

// 处理不同格式的 RGB 字符串
const hex1 = cx.Color.rgbToHex('rgb(0, 0, 0)');
console.log(hex1); // 输出: '#000000'

const hex2 = cx.Color.rgbToHex('rgb(255, 255, 255)');
console.log(hex2); // 输出: '#FFFFFF'

// 在样式转换中使用
const styles = {
    original: {
        color: 'rgb(255,66,238)',
        backgroundColor: 'rgb(0,0,0)',
        borderColor: 'rgb(255,255,255)'
    }
};

const converted = {
    color: cx.Color.rgbToHex(styles.original.color),
    backgroundColor: cx.Color.rgbToHex(styles.original.backgroundColor),
    borderColor: cx.Color.rgbToHex(styles.original.borderColor)
};

console.log(converted);
/*
输出:
{
    color: '#FF42EE',
    backgroundColor: '#000000',
    borderColor: '#FFFFFF'
}
*/

// 批量转换颜色
const rgbColors = [
    'rgb(255,0,0)',
    'rgb(0,255,0)',
    'rgb(0,0,255)'
];

const hexColors = rgbColors.map(color => cx.Color.rgbToHex(color));
console.log(hexColors);
// 输出: ['#FF0000', '#00FF00', '#0000FF']
``` 