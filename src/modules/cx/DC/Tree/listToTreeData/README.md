# listToTreeData

把白关联的数据生成树树结构

## 方法签名
```typescript
static listToTreeData(ret: Array, list: Array, rootExp: Function, childExp: Function, makeNode: Function) => Array.<node>
```

## 参数说明
| 参数名 | 类型 | 必填 | 默认值 | 说明 |
|--------|------|------|--------|------|
| ret | Array | 是 | - | 返回结果 |
| list | Array | 是 | - | 数组数据 |
| rootExp | Function | 是 | - | 判断一个结点是不是根节点(function(item)) |
| childExp | Function | 是 | - | 判断一个结点是不是根节点(function(item, parent)) |
| makeNode | Function | 是 | - | 生成结点数据(function(att, parent) - return {id: String\|Number, isLeaf: Boolean, label: String, disabled: Boolean, icon: String}) |

## 返回值
Array.<node> 类型，返回树结构数据

## 功能描述
把白关联的数据生成树树结构。

## 示例
```typescript
// 生成树结构数据
const treeData = cx.dc.Tree.listToTreeData(
  [], 
  sourceList,
  item => item.parentId === null,
  (item, parent) => item.parentId === parent.id,
  (att, parent) => ({
    id: att.id,
    isLeaf: !att.hasChildren,
    label: att.name,
    disabled: false,
    icon: att.icon
  })
);
``` 