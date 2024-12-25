# getIcon

根据属性取图标

## 方法签名
```typescript
getIcon(index: number, att: Object) => String
```

## 参数说明
| 参数名 | 类型 | 必填 | 默认值 | 说明 |
|--------|------|------|--------|------|
| index | Number | 是 | - | 图标序号 (0, 1) |
| att | Object | 是 | - | 属性 |

## 返回值
返回图标字符串。

## 功能描述
根据给定的图标序号和属性对象，获取对应的图标字符串。

## 示例
```typescript
const node = cx.dc.Tree.treeNode('department', '部门', 1);

// 获取第一个图标
const icon1 = node.getIcon(0, { type: 'folder' });
// 返回: 'xl-icon-folder'

// 获取第二个图标
const icon2 = node.getIcon(1, { status: 'active' });
// 返回: 'xl-icon-check'
``` 