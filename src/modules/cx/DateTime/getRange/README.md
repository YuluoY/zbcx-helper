# getRange

取时间范围

## 方法签名
```typescript
static getRange(type: Number) => Array
```

## 描述
获取指定时间范围。这是一个静态方法。

## 参数
- `type` (Number): 类型(cx.consts.THISMONTH, LASTMONTH,...)

## 返回值
- 类型：`Array`
- 描述：返回时间范围数组

## 示例
```typescript
const range = cx.datetime.getRange(cx.consts.THISMONTH);
``` 