# getExpire

获取过期时间。

## 语法

```javascript
static getExpire(minutes)
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| minutes | Number | 过期时间(分钟) |

## 返回值

| 类型 | 描述 |
|------|------|
| Date | 返回过期时间的日期对象 |

## 描述

`getExpire` 方法用于计算从当前时间开始指定分钟数后的时间。它会:

1. 获取当前时间
2. 加上指定的分钟数
3. 返回计算后的日期对象

这个方法常用于:
- 计算会话过期时间
- 设置缓存过期时间
- 计算任务截止时间

## 示例

```javascript
// 计算30分钟后的过期时间
const expireTime = cx.date.getExpire(30);
console.log(expireTime); // 输出30分钟后的时间

// 用于设置会话过期
const session = {
    startTime: new Date(),
    expireTime: cx.date.getExpire(60), // 1小时后过期
    data: { /* 会话数据 */ }
};

// 用于缓存控制
const cache = {
    key: 'userData',
    value: { /* 缓存数据 */ },
    expireAt: cx.date.getExpire(15) // 15分钟后过期
};

// 检查是否过期
const now = new Date();
const isExpired = now > cache.expireAt;
console.log(`缓存是否过期: ${isExpired}`);
``` 