# setFilter

设置过滤函数或者表达式

## 方法签名
```typescript
setFilter(index: Number, exp: String | function | Array) => Object
```

## 参数说明
| 参数名 | 类型 | 必填 | 默认值 | 说明 |
|--------|------|------|--------|------|
| index | Number | 是 | - | 对应的过滤函数(0, 1) |
| exp | String \| function \| Array | 是 | - | 非根节点的过滤条件 |

## 返回值
Object 类型，返回当前节点对象(this)

## 功能描述
设置过滤函数或者表达式。

## 示例
```typescript
// 创建节点
const node = cx.dc.Tree.treeNode('department', '部门', 1);

// 设置字符串过滤条件
node.setFilter(0, 'name = "test"');

// 设置函数过滤条件
node.setFilter(1, function(item) {
  return item.status === 'active';
});

// 设置数组过滤条件
node.setFilter(0, ['status = 1', 'type = "department"']);
``` 