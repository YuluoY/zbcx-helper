# put

设置字段值

## 方法签名
```typescript
put(colname: string, value: any) => Object
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| colname | String | 是 | 字段名 |
| value | Any | 是 | 值 |

## 返回值
返回 this 对象

## 功能描述
设置字段值。

## 示例
```typescript
const expValues = new cx.dc.ExpValues();
expValues.put("age", 25);
expValues.put("name", "张三");
``` 