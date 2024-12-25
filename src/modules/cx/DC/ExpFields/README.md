# ExpFields

数据中心表达式字段

## 类名
cx.dc.ExpFields

## 功能说明
提供对数据中心表达式字段的基本操作服务，包括字段的设置、清除和类型获取等功能。

## 方法列表
| 方法名 | 说明 | 文档链接 |
|--------|------|----------|
| clear | 清除全部字段 | [查看详情](./clear/README.md) |
| put | 设置字段类型 | [查看详情](./put/README.md) |
| set | 设置字段及类型 | [查看详情](./set/README.md) |
| type | 根据列名取字段类型 | [查看详情](./type/README.md) |

## 使用示例
```typescript
// 创建实例
const expFields = new cx.dc.ExpFields();

// 设置字段类型
expFields.put("age", cx.consts.DT_INT);
expFields.put("name", cx.consts.DT_STRING);

// 获取字段类型
const ageType = expFields.type("age");

// 清除所有字段
expFields.clear();