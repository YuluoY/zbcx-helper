# isTable

判断配置树节点，是否是指定的表

## 方法签名
```typescript
static isTable(cfg: Object, major: Number, major: Number) => Boolean
```

## 参数说明
| 参数名 | 类型 | 必填 | 默认值 | 说明 |
|--------|------|------|--------|------|
| cfg | Object | 是 | - | 树结点配置信息 |
| major | Number | 是 | - | 主类型 |
| major | Number | 是 | - | 子类型 |

## 返回值
Boolean 类型，表示是否是指定的表

## 功能描述
判断配置树节点，是否是指定的表。

## 示例
```typescript
// 判断节点是否是指定表
const isSpecificTable = cx.dc.Tree.isTable(nodeConfig, 1, 2);
``` 