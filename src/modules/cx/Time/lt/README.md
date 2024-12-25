# lt

时间晚于。

## 语法

```javascript
lt(time, refTime)
```

## 参数

- time: Object - 时间
- refTime: Object - 参照时间

## 描述

判断给定时间是否晚于参照时间。

## 示例

```javascript
const time = {hour: 10, minute: 0};
const refTime = {hour: 9, minute: 0};
cx.time.lt(time, refTime);
// 输出: true
```

## 注意事项

- 确保传递正确的时间对象
- 返回值为布尔值，表示时间是否晚于参照时间 