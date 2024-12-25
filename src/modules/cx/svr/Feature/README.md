# feature

功能操作服务类

## 类名
cx.svr.feature

## 功能说明
提供对图形和属性对象的批量操作服务，包括添加、删除、更新、查询等功能。

## 方法列表
| 方法名 | 说明 | 文档链接 |
|--------|------|----------|
| addsAttGra | 批量添加图形和属性对象 | [查看详情](./addsAttGra/README.md) |
| delsAttGra | 批量删除图形和属性对象 | [查看详情](./delsAttGra/README.md) |
| getTopAttGraph | 获取点的拓扑线图形属性对象序列 | [查看详情](./getTopAttGraph/README.md) |
| getTopInfo | 获取拓扑线信息 | [查看详情](./getTopInfo/README.md) |
| qrysAttGra | 批量查询图形和属性对象 | [查看详情](./qrysAttGra/README.md) |
| updsAttGra | 批量更新图形和属性对象 | [查看详情](./updsAttGra/README.md) |

## 使用示例
```javascript
// 批量添加图形和属性对象
const addList = [{ major: 1, minor: 2, gra: {}, att: {} }];
await cx.svr.feature.addsAttGra(addList);

// 批量删除图形和属性对象
const delList = [{ major: 1, minor: 2, id: 123 }];
await cx.svr.feature.delsAttGra(delList);

// 获取点的拓扑线图形属性对象序列
await cx.svr.feature.getTopAttGraph(1, 2, 123);

// 获取拓扑线信息
await cx.svr.feature.getTopInfo(1, 2, 123);

// 批量查询图形和属性对象
const qryList = [{ major: 1, minor: 2, id: 123 }];
await cx.svr.feature.qrysAttGra(qryList);

// 批量更新图形和属性对象
const updList = [{ major: 1, minor: 2, gra: {}, att: {} }];
await cx.svr.feature.updsAttGra(updList);
``` 