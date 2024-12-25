# tree

数据库配置的资源目录(cx_resdir) 转换成 内存对象(DcTreeNode / DcTreeLeaf)树

## 方法签名
```typescript
static tree(result: Array.Object, dbNodes: Array.Object, vals?: Object) => Array.<node>
```

## 参数说明
| 参数名 | 类型 | 必填 | 默认值 | 说明 |
|--------|------|------|--------|------|
| result | Array.Object | 是 | - | 返回结果(数组: DcTreeNode / DcTreeLeaf) |
| dbNodes | Array.Object | 是 | - | cx_resdir 对象列表 |
| vals | Object | 否 | - | table模式数据源条件args或key对应SqlExp参数值，传递给查询的值{node.name: 查询值} |

## 返回值
Array.<node> 类型，返回树结构数据

## 功能描述
将数据库配置的资源目录(cx_resdir)转换成内存对象(DcTreeNode / DcTreeLeaf)树。

## 示例
```typescript
// 转换资源目录为树结构
const treeData = cx.dc.Tree.tree(
  [],
  dbNodesList,
  {
    'node1': 'value1',
    'node2': 'value2'
  }
);
``` 