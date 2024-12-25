# setLabel

设置标题信息

## 方法签名
```typescript
setLabel(label: String | Object | function) => Object
```

## 参数说明
| 参数名 | 类型 | 必填 | 默认值 | 说明 |
|--------|------|------|--------|------|
| label | String \| Object \| function | 是 | - | 标题信息 |

## 返回值
Object 类型，返回当前节点对象(this)

## 功能描述
设置标题信息。

## 示例
```typescript
// 创建叶子节点
const leaf = cx.dc.Tree.treeLeaf('user', '用户', 1);

// 设置字符串标题
leaf.setLabel('新用户');

// 设置对象标题
leaf.setLabel({
  text: '用户',
  icon: 'user-icon'
});

// 设置函数标题
leaf.setLabel(function(data) {
  return data.name + '(' + data.role + ')';
});
``` 