# update

更新操作

## 方法签名
```typescript
static update(major: number, minor: number, newAtt: Object, oldAtt: Object, retAtt?: number = 0, cols?: string) => Promise
```

## 参数说明
| 参数名 | 类型 | 必填 | 默认值 | 说明 |
|--------|------|------|--------|------|
| major | Number | 是 | - | 主类型 |
| minor | Number | 是 | - | 子类型 |
| newAtt | Object | 是 | - | 更新数据对象 |
| oldAtt | Object | 是 | - | 原始数据对象 |
| retAtt | Number | 否 | 0 | 是否返回整条记录，0-不返回，1-返回 |
| cols | String | 否 | - | 待修改的列名 |

## 返回值
Promise 对象

## 功能描述
执行单条记录的更新操作。

## 示例
```typescript
// 基本更新
await cx.svr.attOper.update(1, 2, 
  { name: "new_name" },
  { id: 1, name: "old_name" }
);

// 返回更新后的记录
await cx.svr.attOper.update(1, 2,
  { name: "new_name" },
  { id: 1, name: "old_name" },
  1
);

// 指定更新列
await cx.svr.attOper.update(1, 2,
  { name: "new_name", age: 20 },
  { id: 1, name: "old_name", age: 18 },
  0,
  "name"
);
``` 