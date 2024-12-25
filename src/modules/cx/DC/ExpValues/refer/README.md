# refer

取引用的值

## 方法签名
```typescript
refer(key: string, ret: Object)
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| key | String | 是 | key |
| ret | Object | 是 | 返回值 {type: Number, val: String} |

## 功能描述
取引用的值，如: "userid=={_userId}",取_userId的值。

## 示例
```typescript
const expValues = new cx.dc.ExpValues();
const ret = {};
expValues.refer("_userId", ret);
// ret 将包含 {type: Number, val: String} 格式的返回值
``` 