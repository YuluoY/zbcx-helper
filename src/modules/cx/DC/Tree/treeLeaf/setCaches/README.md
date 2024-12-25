# setCaches

设置缓存

## 方法签名
```typescript
setCaches(cacheRoot?: String | function | Array, cacheNotRoot?: String | function | Array) => Object
```

## 参数说明
| 参数名 | 类型 | 必填 | 默认值 | 说明 |
|--------|------|------|--------|------|
| cacheRoot | String \| function \| Array | 否 | - | 根节点的缓存 |
| cacheNotRoot | String \| function \| Array | 否 | - | 非根节点的缓存 |

## 返回值
Object 类型，返回当前节点对象(this)

## 功能描述
设置缓存。

## 示例
```typescript
// 创建叶子节点
const leaf = cx.dc.Tree.treeLeaf('user', '用户', 1);

// 设置根节点和非根节点的缓存
leaf.setCaches(
  '{parent}.id',  // 根节点缓存
  function(parent) {  // 非根节点缓存
    return parent.id;
  }
);

// 使用数组设置缓存
leaf.setCaches(
  ['id', 'name'],  // 根节点缓存
  ['parentId', 'type']  // 非根节点缓存
);
``` 