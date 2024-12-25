# Time

`cx.time` 类 - 时间(时分秒)的实现。

## 构造函数

```javascript
new Time()
```

## 静态方法

- **addMinutes(time, minutes)**: 增加分钟数量
- **calcDayMinutes(workTime)** → {Number}: 取一天的工作分钟数
- **compare(time1, time2)** → {Number}: 比较两个时间大小
- **copy(time)** → {Object}: 拷贝时间
- **diffMinutes(stTime, endTime)** → {Number}: 计算一天内两个时间点之间的分钟数
- **diffWorkMinutes(stTime, endTime, workTime)** → {Number}: 取一天内两个时间点之间的工作时间分钟数
- **et(time, refTime)**: 时间早于
- **isIn(time, stTime, endTime)** → {Boolean}: 判断一个时间点是否在两个时间点之间
- **lt(time, refTime)**: 时间晚于
- **parse(str)** → {Object}: 根据字符串解析时间

## 实例方法

- **diffTime(date1, date2)** → {Object}: 计算两个日期时间差

## 使用示例

```javascript
// 使用静态方法
const time1 = {hour: 9, minute: 0};
const time2 = {hour: 17, minute: 0};
const workMinutes = cx.time.calcDayMinutes([time1, time2]);
console.log('工作分钟数:', workMinutes);

// 创���Time实例
const timeInstance = new cx.time();
const diff = timeInstance.diffTime('2023-01-01', '2023-01-02');
console.log('时间差:', diff);
```

## 注意事项

- 静态方法可以直接通过 `cx.time` 调用
- 实例方法需要通过 `new cx.time()` 创建实例后使用 