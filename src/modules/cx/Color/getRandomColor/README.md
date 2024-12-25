# getRandomColor

返回随机颜色。

## 语法

```javascript
static getRandomColor(color = '#ffffff')
```

## 参数

| 参数名 | 类型 | 是否可选 | 默认值 | 描述 |
|--------|------|----------|---------|------|
| color | String | 是 | '#ffffff' | 需要排除的颜色 |

## 返回值

| 类型 | 描述 |
|------|------|
| String | 生成的随机颜色(十六进制格式) |

## 描述

`getRandomColor` 方法用于生成一个随机的颜色值。它会:

1. 生成一个随机的十六进制颜色值
2. 确保生成的颜色与指定的排除颜色不同
3. 返回格式为 '#RRGGBB' 的颜色字符串

这个方法常用于:
- 生成随机的主题色
- 为数据可视化生成不同的颜色
- 创建随机的背景色或前景色

## 示例

```javascript
// 基本用法 - 生成任意随机颜色
const randomColor = cx.Color.getRandomColor();
console.log(randomColor); // 输出类似: '#FF42EE'

// 排除特定颜色
const colorExceptWhite = cx.Color.getRandomColor('#ffffff');
console.log(colorExceptWhite); // 输出一个不是白色的随机颜色

// 生成多个随机颜色
const colors = Array(5).fill(0).map(() => cx.Color.getRandomColor());
console.log(colors); // 输出 5 个随机颜色的数组

// 在实际应用中使用
const items = ['Item 1', 'Item 2', 'Item 3'];
const coloredItems = items.map(item => ({
    text: item,
    backgroundColor: cx.Color.getRandomColor()
}));
console.log(coloredItems);
/*
输出类似:
[
    { text: 'Item 1', backgroundColor: '#FF42EE' },
    { text: 'Item 2', backgroundColor: '#3AFF12' },
    { text: 'Item 3', backgroundColor: '#1234FF' }
]
*/
``` 