# copy

拷贝时间。

## 语法

```javascript
copy(time) → {Object}
```

## 参数

- time: Object - 时间对象

## 返回值

- Object - 拷贝的时间对象

## 描述

创建给定时间对象的副本。

## 示例

```javascript
const time = {hour: 9, minute: 30};
const newTime = cx.time.copy(time);
console.log('拷贝的时间:', newTime);
// 输出: {hour: 9, minute: 30}
```

## 注意事项

- 确保传递正确的时间对象
- 返回的新对象是原对象的副本 