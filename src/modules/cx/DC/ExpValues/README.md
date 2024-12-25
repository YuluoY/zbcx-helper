# ExpValues

数据中心表达式值

## 类名
cx.dc.ExpValues

## 功能说明
提供对数据中心表达式值的基本操作服务，包括值的设置、清除和获取等功能。

## 方法列表
| 方法名 | 说明 | 文档链接 |
|--------|------|----------|
| clear | 清除全部值 | [查看详情](./clear/README.md) |
| put | 设置字段值 | [查看详情](./put/README.md) |
| refer | 取引用的值 | [查看详情](./refer/README.md) |
| set | 设置值 | [查看详情](./set/README.md) |
| setValue | 设置值 | [查看详情](./setValue/README.md) |
| value | 根据字段名取值 | [查看详情](./value/README.md) |

## 使用示例
```typescript
// 创建实例
const expValues = new cx.dc.ExpValues();

// 设置字段值
expValues.put("age", 25);
expValues.put("name", "张三");

// 获取字段值
const age = expValues.value("age");

// 设置表达式值
const expItem = new cx.exp.ExpItem();
expValues.setValue("columnName", expItem);

// 清除所有值
expValues.clear();
``` 