# gradientColor

计算两个颜色之间的渐变色。

## 语法

```javascript
static gradientColor(startColor, endColor, num)
```

## 参数

| 参数名 | 类型 | 是否可选 | 描述 |
|--------|------|----------|------|
| startColor | String | 否 | 开始颜色(十六进制) |
| endColor | String | 否 | 终止颜色(十六进制) |
| num | Number | 否 | 需要生成的颜色数量 |

## 返回值

| 类型 | 描述 |
|------|------|
| Array | 包含生成的渐变颜色的数组 |

## 描述

`gradientColor` 方法用于计算两个颜色之间的渐变过渡色。它会:

1. 将起始和结束颜色转换为 RGB 格式
2. 计算每个颜色通道(R、G、B)的渐变步长
3. 根据指定的数量,生成均匀分布的渐变色
4. 返回一个包含所有渐变色的数组

这个方法常用于:
- 创建平滑的颜色过渡效果
- 生成颜色主题
- 数据可视化中的颜色映射

## 示例

```javascript
// 基本用法 - 生成红色到蓝色的渐变
const gradient = cx.Color.gradientColor('#FF0000', '#0000FF', 5);
console.log(gradient);
// 输出类似: ['#FF0000', '#BF003F', '#7F007F', '#3F00BF', '#0000FF']

// 生成黑白渐变
const grayscale = cx.Color.gradientColor('#000000', '#FFFFFF', 3);
console.log(grayscale);
// 输出: ['#000000', '#7F7F7F', '#FFFFFF']

// 在样式中使用渐变色
const colors = cx.Color.gradientColor('#FF0000', '#00FF00', 4);
const elements = colors.map((color, index) => ({
    id: `element-${index}`,
    style: {
        backgroundColor: color,
        transition: 'background-color 0.3s'
    }
}));
console.log(elements);
/*
输出类似:
[
    { id: 'element-0', style: { backgroundColor: '#FF0000', transition: 'background-color 0.3s' } },
    { id: 'element-1', style: { backgroundColor: '#BF3F00', transition: 'background-color 0.3s' } },
    { id: 'element-2', style: { backgroundColor: '#7F7F00', transition: 'background-color 0.3s' } },
    { id: 'element-3', style: { backgroundColor: '#3FBF00', transition: 'background-color 0.3s' } }
]
*/

// 在数据可视化中使用
const data = [0, 25, 50, 75, 100];
const heatColors = cx.Color.gradientColor('#00FF00', '#FF0000', data.length);
const heatmap = data.map((value, index) => ({
    value,
    color: heatColors[index]
}));
console.log(heatmap);
/*
输出类似:
[
    { value: 0, color: '#00FF00' },
    { value: 25, color: '#3FBF00' },
    { value: 50, color: '#7F7F00' },
    { value: 75, color: '#BF3F00' },
    { value: 100, color: '#FF0000' }
]
*/
``` 