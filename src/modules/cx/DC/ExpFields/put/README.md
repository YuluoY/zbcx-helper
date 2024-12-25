# put

设置字段类型

## 方法签名
```typescript
put(colname: string, type: number) => void
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| colname | String | 是 | 列名 |
| type | Number | 是 | 字段类型(cx.consts.DT_INT / DT_REAL / DT_STRING ...) |

## 功能描述
设置字段类型。

## 示例
```typescript
const expFields = new cx.dc.ExpFields();
expFields.put("age", cx.consts.DT_INT);
expFields.put("name", cx.consts.DT_STRING);
``` 