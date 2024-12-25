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
// 创建节点
const node = cx.dc.Tree.treeNode('department', '部门', 1);

// 设置字符串标题
node.setLabel('新部门');

// 设置对象标题
node.setLabel({
  text: '部门',
  icon: 'folder'
});

// 设置函数标题
node.setLabel(function(data) {
  return data.name + '(' + data.code + ')';
});
``` 