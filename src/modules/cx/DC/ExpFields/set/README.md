# set

设置字段及类型

## 方法签名
```typescript
set(colname: string, type: number) => void
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| colname | String | 是 | 列名 |
| type | Number | 是 | 类型 |

## 功能描述
设置字段及其类型。

## 示例
```typescript
const expFields = new cx.dc.ExpFields();
expFields.set("age", cx.consts.DT_INT);
expFields.set("name", cx.consts.DT_STRING);
``` 