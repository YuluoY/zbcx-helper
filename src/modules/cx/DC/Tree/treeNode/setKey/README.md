# setKey

设置Key信息

## 方法签名
```typescript
setKey(key: String | function) => Object
```

## 参数说明
| 参数名 | 类型 | 必填 | 默认值 | 说明 |
|--------|------|------|--------|------|
| key | String \| function | 是 | - | Key信息 |

## 返回值
Object 类型，返回当前节点对象(this)

## 功能描述
设置Key信息。

## 示例
```typescript
// 创建节点
const node = cx.dc.Tree.treeNode('department', '部门', 1);

// 设置字符串Key
node.setKey('id');

// 设置函数Key
node.setKey(function(item) {
  return item.id + '_' + item.type;
});
``` 