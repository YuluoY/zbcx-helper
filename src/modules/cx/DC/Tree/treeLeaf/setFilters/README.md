# setFilters

设置过滤函数或者表达式

## 方法签名
```typescript
setFilters(expRoot?: String | function | Array, expNotRoot?: String | function | Array) => Object
```

## 参数说明
| 参数名 | 类型 | 必填 | 默认值 | 说明 |
|--------|------|------|--------|------|
| expRoot | String \| function \| Array | 否 | - | 根节点的过滤条件 |
| expNotRoot | String \| function \| Array | 否 | - | 非根节点的过滤条件 |

## 返回值
Object 类型，返回当前节点对象(this)

## 功能描述
设置过滤函数或者表达式。

## 示例
```typescript
// 创建叶子节点
const leaf = cx.dc.Tree.treeLeaf('user', '用户', 1);

// 设置根节点和非根节点的过滤条件
leaf.setFilters(
  'type = "root"',  // 根节点过滤条件
  function(item) {  // 非根节点过滤条件
    return item.status === 'active';
  }
);

// 使用数组设置过滤条件
leaf.setFilters(
  ['isRoot = 1', 'status = 1'],  // 根节点过滤条件
  ['parentId IS NOT NULL', 'isActive = 1']  // 非根节点过滤条件
);
``` 