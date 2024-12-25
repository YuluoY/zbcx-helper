# insert

插入操作(不带ID)

## 方法签名
```typescript
static insert(major: number, minor: number, newAtt: Object, retAtt?: number = 0) => Promise
```

## 参数说明
| 参数名 | 类型 | 必填 | 默认值 | 说明 |
|--------|------|------|--------|------|
| major | Number | 是 | - | 主类型 |
| minor | Number | 是 | - | 子类型 |
| newAtt | Object | 是 | - | 插入数据对象 |
| retAtt | Number | 否 | 0 | 是否返回整条记录，0-不返回，1-返回 |

## 返回值
Promise 对象

## 功能描述
执行单条记录的插入操作，不需要指定ID。

## 示例
```typescript
// 不返回插入记录
await cx.svr.attOper.insert(1, 2, { name: "test" });

// 返回插入记录
await cx.svr.attOper.insert(1, 2, { name: "test" }, 1);
``` 