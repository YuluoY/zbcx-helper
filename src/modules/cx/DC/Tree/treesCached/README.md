# treesCached

根据配置 node 取配置的资源目录 (从缓存取)

## 方法签名
```typescript
static treesCached(node: String, vals?: Object) => Promise
```

## 参数说明
| 参数名 | 类型 | 必填 | 默认值 | 说明 |
|--------|------|------|--------|------|
| node | String | 是 | - | 配置的节点 (resdir.node = node) |
| vals | Object | 否 | - | table模式数据源条件args或key对应SqlExp参数值，传递给查询的值{node.name: 查询值} |

## 返回值
Promise 类型，返回 DcTreeNode 树结构对象

## 功能描述
根据配置 node 取配置的资源目录 (从缓存取)。

## 示例
```typescript
// 从缓存获取配置的资源目录
const cachedTreeData = await cx.dc.Tree.treesCached(
  'mainConfig',
  {
    'param1': 'value1',
    'param2': 'value2'
  }
);
``` 