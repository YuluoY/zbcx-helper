# rangeMonth

按照年+月给出时间范围

## 方法签名
```typescript
static rangeMonth(timestamp: Date) => Date
```

## 描述
根据给定的时间戳获取对应月份的时间范围。这是一个静态方法。

## 参数
- `timestamp` (Date): Timestamp对象

## 返回值
- 类型：`Date`
- 描述：返回时间范围

## 示例
```typescript
const date = new Date();
const monthRange = cx.datetime.rangeMonth(date);
``` 