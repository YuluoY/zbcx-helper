# add

增加子结点或者数据

## 方法签名
```typescript
add(child: cx.dc.DcTreeNode | cx.dc.DcTreeLeaf) => Object
```

## 参数说明
| 参数名 | 类型 | 必填 | 默认值 | 说明 |
|--------|------|------|--------|------|
| child | cx.dc.DcTreeNode \| cx.dc.DcTreeLeaf | 是 | - | 子结点或者数据节点 |

## 返回值
Object 类型，返回当前节点对象(this)

## 功能描述
增加子结点或者数据。

## 示例
```typescript
// 创建父节点
const parentNode = cx.dc.Tree.treeNode('parent', '父节点', 1);

// 创建并添加子节点
const childNode = cx.dc.Tree.treeNode('child', '子节点', 1);
parentNode.add(childNode);

// 创建并添加叶子节点
const leafNode = cx.dc.Tree.treeLeaf('leaf', '叶子节点', 1);
parentNode.add(leafNode);
``` 