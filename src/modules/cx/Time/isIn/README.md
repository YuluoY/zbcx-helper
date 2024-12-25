# isIn

判断一个时间点是否在两个时间点之间。

## 语法

```javascript
isIn(time, stTime, endTime) → {Boolean}
```

## 参数

- time: Object - 时间点
- stTime: Object - 起始时间
- endTime: Object - 结束时间

## 返回值

- Boolean - 在范围内返回True, 不在范围内返回False

## 描述

判断给定时间点是否在起始时间和结束时间之间。

## 示例

```javascript
const time = {hour: 10, minute: 0};
const stTime = {hour: 9, minute: 0};
const endTime = {hour: 17, minute: 0};
const result = cx.time.isIn(time, stTime, endTime);
console.log('是否在范围内:', result);
// 输出: true
```

## 注意事项

- 确保传递正确的时间对象
- 返回值为布尔值，表示时间点是否在范围内 