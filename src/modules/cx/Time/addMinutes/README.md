# addMinutes

增加分钟数量。

## 语法

```javascript
addMinutes(time, minutes)
```

## 参数

- time: Object - 时间对象
- minutes: Number - 分钟数量

## 描述

在给定的时间对象上增加指定的分钟数。

## 示例

```javascript
const time = {hour: 9, minute: 30};
cx.time.addMinutes(time, 15);
console.log('新时间:', time);
// 输出: {hour: 9, minute: 45}
```

## 注意事项

- 确保传递正确的时间对象
- 增加的分钟数可能会导致小时数的变化 