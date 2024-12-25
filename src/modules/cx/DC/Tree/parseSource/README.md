# parseSource

解析数据源

## 方法签名
```typescript
static parseSource(srcType: Number, source: Object) => Object
```

## 参数说明
| 参数名 | 类型 | 必填 | 默认值 | 说明 |
|--------|------|------|--------|------|
| srcType | Number | 是 | - | 数据源类型 |
| source | Object | 是 | - | 数据源描述 |

## 返回值
Object 类型，返回解析后的数据源对象

## 功能描述
解析数据源。

## 示例
```typescript
// 解析数据源
const sourceObj = cx.dc.Tree.parseSource(1, {
  type: "database",
  connection: "main",
  table: "users"
});
``` 