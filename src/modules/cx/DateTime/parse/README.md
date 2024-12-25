# parse

根据字符串解析日期+时间

## 方法签名
```typescript
static parse(str: String) => Date
```

## 描述
根据字符串解析日期+时间(格式: 2017-10-26 09:00:00)(IE的Date类不能识别Timestamp字符串, 切记!!)

## 参数
- `str` (String): 日期+时间字符串

## 返回值
- 类型：`Date`
- 描述：返回解析后的日期对象

## 示例
```typescript
const date = cx.datetime.parse('2017-10-26 09:00:00');
``` 