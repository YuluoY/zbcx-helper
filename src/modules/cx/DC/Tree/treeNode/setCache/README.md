# setCache

设置缓存信息

## 方法签名
```typescript
setCache(index: Number, cache: String | function) => Object
```

## 参数说明
| 参数名 | 类型 | 必填 | 默认值 | 说明 |
|--------|------|------|--------|------|
| index | Number | 是 | - | 对应的缓存(0, 1) |
| cache | String \| function | 是 | - | 缓存信息 |

## 返回值
Object 类型，返回当前节点对象(this)

## 功能描述
设置缓存信息。

## 示例
```typescript
// 创建节点
const node = cx.dc.Tree.treeNode('department', '部门', 1);

// 设置字符串缓存
node.setCache(0, '{parent}.id');

// 设置函数缓存
node.setCache(1, function(parent) {
  return parent.id;
});
``` 