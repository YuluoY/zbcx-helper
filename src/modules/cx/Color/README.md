# Color

Color 是一个颜色处理工具类,提供了一系列用于颜色转换、生成和处理的静态方法。

## 方法

| 方法名 | 描述 |
|--------|------|
| [getColorRamp](getColorRamp) | 根据颜色数组中每两个颜色对象间的梯度,插入若干新颜色,共生成指定数量的元素 |
| [getRandomColor](getRandomColor) | 返回随机颜色 |
| [gradientColor](gradientColor) | 计算两个颜色之间的渐变色 |
| [hexToRgb](hexToRgb) | 十六进制颜色转 RGB |
| [rgbToHex](rgbToHex) | RGB 转十六进制 |
| [rgbToRgba](rgbToRgba) | RGB 转 RGBA |

## 示例

```javascript
// 获取随机颜色
const randomColor = cx.Color.getRandomColor();
console.log(randomColor); // 输出类似: '#FF42EE'

// 生成渐变色
const gradientColors = cx.Color.gradientColor('#FF0000', '#0000FF', 5);
console.log(gradientColors); // 输出一个包含 5 个颜色的数组

// 颜色格式转换
const rgb = cx.Color.hexToRgb('#FF42EE');
console.log(rgb); // 输出: 'rgb(255,66,238)'

const hex = cx.Color.rgbToHex('rgb(255,66,238)');
console.log(hex); // 输出: '#FF42EE'

const rgba = cx.Color.rgbToRgba('rgb(255,66,238)', 0.5);
console.log(rgba); // 输出: 'rgba(255,66,238,0.5)'

// 生成颜色渐变序列
const colors = ['#FF0000', '#00FF00', '#0000FF'];
const ramp = cx.Color.getColorRamp(10, colors);
console.log(ramp); // 输出一个包含 10 个颜色的数组