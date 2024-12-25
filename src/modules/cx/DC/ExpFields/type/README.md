# type

根据列名取字段类型

## 方法签名
```typescript
type(colname: string) => number
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| colname | String | 是 | 列名 |

## 返回值
返回字段类型 (cx.consts.DT_INT / DT_REAL / DT_STRING ...)

## 功能描述
根据列名获取字段类型。

## 示例
```typescript
const expFields = new cx.dc.ExpFields();
expFields.put("age", cx.consts.DT_INT);
const type = expFields.type("age"); // 返回 cx.consts.DT_INT
``` 