# getBillM

取工单号

## 方法签名
```typescript
static getBillM(name: String) => Promise
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| name | String | 是 | 工单名字 |

## 返回值
Promise 对象，包含工单信息。

## 功能描述
根据工单名字获取工单信息。

## 示例
```typescript
const billInfo = await cx.svr.bpm.getBillM('Order123');
console.log(billInfo);
``` 