# value

根据字段名取值

## 方法签名
```typescript
value(colname: string) => any
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| colname | String | 是 | 字段名 |

## 返回值
返回字段值（类型：Any）

## 功能描述
根据字段名获取值。

## 示例
```typescript
const expValues = new cx.dc.ExpValues();
expValues.put("age", 25);
const age = expValues.value("age"); // 返回 25
``` 