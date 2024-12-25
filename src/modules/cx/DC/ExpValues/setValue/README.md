# setValue

设置值

## 方法签名
```typescript
setValue(colname: string, value: cx.exp.ExpItem)
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| colname | String | 是 | 列名 |
| value | cx.exp.ExpItem | 是 | 值 |

## 功能描述
设置值。

## 示例
```typescript
const expValues = new cx.dc.ExpValues();
const expItem = new cx.exp.ExpItem();
expValues.setValue("columnName", expItem);
``` 