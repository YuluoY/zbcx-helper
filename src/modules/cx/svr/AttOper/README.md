# attOper

属性处理操作服务类

## 类名
cx.svr.attOper

## 功能说明
提供对数据属性的基本操作服务，包括插入、更新、删除等功能。

## 方法列表
| 方法名 | 说明 | 文档链接 |
|--------|------|----------|
| del | 删除操作 | [查看详情](./del/README.md) |
| dels | 批量删除操作 | [查看详情](./dels/README.md) |
| insert | 插入操作(不带ID) | [查看详情](./insert/README.md) |
| update | 更新操作 | [查看详情](./update/README.md) |

## 使用示例
```typescript
// 插入操作
await cx.svr.attOper.insert(1, 2, { name: "test" });

// 更新操作
await cx.svr.attOper.update(1, 2, { name: "new_name" }, { id: 1, name: "old_name" });

// 删除操作
await cx.svr.attOper.del(1, 2, { id: 1 });

// 批量删除
await cx.svr.attOper.dels(1, 2, [{ id: 1 }, { id: 2 }]);
``` 