# dels

批量删除操作

## 方法签名
```typescript
static dels(major: number, minor: number, oldAtt: Array<Object>) => Promise
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| major | Number | 是 | 主类型 |
| minor | Number | 是 | 子类型 |
| oldAtt | Array<Object> | 是 | 原始数据对象数组 |

## 返回值
Promise 对象

## 功能描述
执行多条记录的批量删除操作。

## 示例
```typescript
await cx.svr.attOper.dels(1, 2, [
  { id: 1, name: "test1" },
  { id: 2, name: "test2" }
]);
``` 