# DcPlug

数据中心插件API

## 类名
cx.dc.Plug

## 功能说明
提供数据中心插件相关的操作功能，包括插件定义、执行、状态管理等。

## 方法列表
| 方法名 | 说明 | 文档链接 |
|--------|------|----------|
| defPlug | 取插件默认信息 | [查看详情](./defPlug/README.md) |
| execute | 运行某个具体的功能项 | [查看详情](./execute/README.md) |
| plugNode | 得到一个数据中心插件的对象 | [查看详情](./plugNode/README.md) |
| plugParams | 根据设定的取参数的格式字符串，根据指定提供取属性的方法，得到最后的参数对象 | [查看详情](./plugParams/README.md) |
| plugs | 根据配置node取配置的插件(设置了缓存，从缓存取；没有设置缓存数据，从数据库取) | [查看详情](./plugs/README.md) |
| plugsCached | 根据配置node取配置的插件(从缓存取) | [查看详情](./plugsCached/README.md) |
| plugsDb | 根据配置node取配置的插件(从数据库取) | [查看详情](./plugsDb/README.md) |
| state | 根据当前的状态，确定菜单、工具条的状态 | [查看详情](./state/README.md) |
| state2 | 根据当前的状态，确定菜单、工具条的状态 | [查看详情](./state2/README.md) |
| stateNode | 根据当前的状态，确定菜单、工具条的状态 | [查看详情](./stateNode/README.md) |
| tree | 把记录数据配置的插件变成树状结构(用于菜单、共具体、右边键) | [查看详情](./tree/README.md) |
| treeId | 给树状结构的对象增加ID | [查看详情](./treeId/README.md) |

## 使用示例
```typescript
// 创建插件实例
const plug = new cx.dc.Plug();

// 定义插件
const plugNode = cx.dc.Plug.defPlug('add', 'node1', 'addFunction');

// 执行插件功能
await cx.dc.Plug.execute(plugNode, getPlugValue, curNode);

// 获取插件树结构
const treeData = cx.dc.Plug.tree(result, dbPlugs, 'rootGroup');
``` 