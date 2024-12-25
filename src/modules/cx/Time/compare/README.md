# compare

比较两个时间大小。

## 语法

```javascript
compare(time1, time2) → {Number}
```

## 参数

- time1: Object - 时间对象
- time2: Object - 时间对象

## 返回值

- Number - 比较结果 (1=大于, 0=等于, -1=小于)

## 描述

比较两个时间对象的大小。

## 示例

```javascript
const time1 = {hour: 9, minute: 0};
const time2 = {hour: 17, minute: 0};
const result = cx.time.compare(time1, time2);
console.log('比较结果:', result);
// 输出: -1
```

## 注意事项

- 确保传递正确的时间对象
- 返回值表示时间的相对大小 