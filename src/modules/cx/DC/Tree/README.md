# DcTree

数据中心树API

## 类名
cx.dc.Tree

## 功能说明
提供数据中心树相关的功能，包括树节点的创建、解析、排序等操作。

## 方法列表
| 方法名 | 说明 | 文档链接 |
|--------|------|----------|
| isTable | 判断配置树节点，是否是指定的表 | [查看详情](./isTable/README.md) |
| listToTreeData | 把白关联的数据生成树树结构 | [查看详情](./listToTreeData/README.md) |
| parseObj | 解析配置的内存对象 | [查看详情](./parseObj/README.md) |
| parseSource | 解析数据源 | [查看详情](./parseSource/README.md) |
| sortData | 对数据进行排序 | [查看详情](./sortData/README.md) |
| tree | 数据库配置的资源目录转换成内存对象树 | [查看详情](./tree/README.md) |
| treeLeaf | 得到数据中心树配置叶子 | [查看详情](./treeLeaf/README.md) |
| treeNode | 得到数据中心树配置结点 | [查看详情](./treeNode/README.md) |
| trees | 根据配置node取配置的插件 | [查看详情](./trees/README.md) |
| treesCached | 根据配置node取配置的资源目录(从缓存取) | [查看详情](./treesCached/README.md) |
| treesDb | 根据配置node取配置的资源目录(从数据库取) | [查看详情](./treesDb/README.md) |

## 使用示例
```typescript
// 创建树节点
const node = cx.dc.Tree.treeNode('root', '根节点', 1);

// 创建树叶子
const leaf = cx.dc.Tree.treeLeaf('child', '子节点', 1);

// 解析数据源
const source = cx.dc.Tree.parseSource(1, {
  type: 'database',
  table: 'users'
});

// 数据排序
const data = [{name: 'b'}, {name: 'a'}];
cx.dc.Tree.sortData(data, {
  key: 'name',
  desc: false
});

// 从数据库获取树结构
const treeData = await cx.dc.Tree.treesDb('config');
``` 